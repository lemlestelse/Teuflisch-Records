document.addEventListener('DOMContentLoaded', function () {
    const neonColor = window.neonColor || 'rgba(128, 0, 128, 0.8)';

    const userAudio = document.getElementById('userAudio');
    const backgroundVideo = document.getElementById('backgroundVideo');
    const neonElement = document.querySelector('.neon-shadow');

    if ((userAudio || backgroundVideo) && neonElement) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        let source;

        if (userAudio) {
            source = audioContext.createMediaElementSource(userAudio);
        } else if (backgroundVideo) {
            source = audioContext.createMediaElementSource(backgroundVideo);
        }

        if (source) {
            source.connect(analyser);
            analyser.connect(audioContext.destination);

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            function animateNeon() {
                requestAnimationFrame(animateNeon);
                analyser.getByteFrequencyData(dataArray);

                let sum = dataArray.reduce((a, b) => a + b, 0);
                let average = sum / dataArray.length;

                let intensity = average / 255;
                let multiplier = 2.5;
                let radius = 10 + intensity * 30 * multiplier;

                neonElement.style.boxShadow = `
                    0 0 ${radius}px ${neonColor},
                    0 0 ${radius * 2}px ${neonColor.replace('0.8', '0.6')},
                    0 0 ${radius * 3}px ${neonColor.replace('0.8', '0.4')},
                    0 0 ${radius * 4}px ${neonColor.replace('0.8', '0.2')}
                `;
            }

            function resetNeon() {
                neonElement.style.boxShadow = `
                    0 0 10px ${neonColor},
                    0 0 20px ${neonColor.replace('0.8', '0.6')},
                    0 0 30px ${neonColor.replace('0.8', '0.4')},
                    0 0 40px ${neonColor.replace('0.8', '0.2')}
                `;
            }

            if (userAudio) {
                userAudio.addEventListener('play', () => {
                    audioContext.resume().then(() => {
                        animateNeon();
                    });
                });

                userAudio.addEventListener('pause', resetNeon);
                userAudio.addEventListener('ended', resetNeon);
            }

            if (backgroundVideo) {
                backgroundVideo.addEventListener('play', () => {
                    audioContext.resume().then(() => {
                        animateNeon();
                    });
                });

                backgroundVideo.addEventListener('pause', resetNeon);
                backgroundVideo.addEventListener('ended', resetNeon);
            }
        }
    }
});
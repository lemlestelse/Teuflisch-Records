document.addEventListener('DOMContentLoaded', function () {
    const clickHere = document.getElementById('clickHere');

    if (clickHere) {
        clickHere.addEventListener('click', () => {
            clickHere.style.display = 'none';

            document.querySelectorAll('.profile-content').forEach(function(element) {
                element.style.display = element.style.display === 'none' ? 'block' : 'none';
            });

            const userAudio = document.getElementById('userAudio');
            if (userAudio) {
                const audioVolume = userAudio.getAttribute('data-volume') / 100;
                userAudio.volume = audioVolume;
                userAudio.loop = true;
                userAudio.play();

                userAudio.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                });
            }

            const backgroundVideo = document.getElementById('backgroundVideo');
            if (backgroundVideo) {
                const videoVolume = backgroundVideo.getAttribute('data-volume') / 100;
                backgroundVideo.volume = videoVolume;
                backgroundVideo.play();
            }
        });
    }
});
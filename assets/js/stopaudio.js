document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("userAudio");
    var backgroundVideo = document.getElementById("backgroundVideo");
    var muteButton = document.getElementById("muteButton");
    var volumeIcon = document.getElementById("volumeIcon");
    var muteIcon = document.getElementById("muteIcon");
    var isAudioPlaying = false;
    var isBackgroundVideoPlaying = false;

    muteButton.style.display = "none";

    muteButton.addEventListener("click", function() {
        if (isAudioPlaying) {
            if (audio && audio.muted === false) {
                audio.muted = true;
            } else if (audio && audio.muted === true) {
                audio.muted = false;
            }
        } else if (isBackgroundVideoPlaying) {
            if (backgroundVideo && backgroundVideo.muted === false) {
                backgroundVideo.muted = true;
            } else if (backgroundVideo && backgroundVideo.muted === true) {
                backgroundVideo.muted = false;
            }
        }

        updateButtonIcons();
    });

    function updateButtonIcons() {
        if (isAudioPlaying && audio && audio.muted === false) {
            volumeIcon.style.display = "inline";
            muteIcon.style.display = "none";
        } else if (isBackgroundVideoPlaying && backgroundVideo && backgroundVideo.muted === false) {
            volumeIcon.style.display = "inline";
            muteIcon.style.display = "none";
        } else {
            volumeIcon.style.display = "none";
            muteIcon.style.display = "inline";
        }
    }

    function checkPlayback() {
        isAudioPlaying = audio && !audio.paused;
        isBackgroundVideoPlaying = backgroundVideo && !backgroundVideo.paused;

        if (isAudioPlaying || isBackgroundVideoPlaying) {
            muteButton.style.display = "inline";
            updateButtonIcons();
        } else {
            muteButton.style.display = "none";
        }
    }

    if (audio) {
        audio.addEventListener("play", checkPlayback);
        audio.addEventListener("pause", checkPlayback);
    }

    if (backgroundVideo) {
        backgroundVideo.addEventListener("play", checkPlayback);
        backgroundVideo.addEventListener("pause", checkPlayback);
    }
});
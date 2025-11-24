const audio = document.getElementById("myAudio");
const muteButton = document.getElementById("muteButton");

muteButton.addEventListener("click", () => {
  audio.muted = !audio.muted;

  if (!audio.muted) {
    audio.play(); // Por si Chrome requiere play() después de desmutear
  }

  muteButton.textContent = audio.muted ? "🔇" : "🔊";
});

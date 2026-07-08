const audio = document.getElementById("myAudio");
const muteButton = document.getElementById("muteButton");

// Estado inicial: no reproducido
let isPlaying = false;

muteButton.addEventListener("click", () => {
    if (!isPlaying) {
        // Inicia la reproducción al primer click
        audio.play().then(() => {
            audio.muted = false;
            isPlaying = true;
            muteButton.innerHTML = '<span class="material-icons">volume_up</span>';
        }).catch(err => {
            console.log("No se pudo reproducir:", err);
        });
    } else {
        // Alterna mute
        audio.muted = !audio.muted;
        muteButton.innerHTML = audio.muted ? '<span class="material-icons">volume_off</span>' : '<span class="material-icons">volume_up</span>';
    }
});
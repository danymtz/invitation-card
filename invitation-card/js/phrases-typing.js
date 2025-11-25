const phrases = [
    "Un añito de amor, sonrisas y pequeños grandes momentos. ¡Ven a celebrar conmigo!",
    "Ven a compartir risas y a construir los mejores recuerdos. ¡Te quiero aquí conmigo!",
    "⁠Un día mágico se acerca... ¡y tú estás invitado/a a hacerlo aún más especial!"
];

const textContainer = document.getElementById("text");
let phraseIndex = 0;
let charIndex = 0;
let forward = true;

const typingSpeed = 100;   // velocidad al escribir
const deletingSpeed = 50;  // velocidad al borrar
const pauseAfterTyping = 3000;
const pauseAfterDeleting = 500;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (forward) {
        textContainer.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            forward = false;
            setTimeout(type, pauseAfterTyping);
            return;
        }
        setTimeout(type, typingSpeed);
    } else {
        textContainer.textContent = textContainer.textContent.slice(0, -1);
        charIndex--;
        if (charIndex === 0) {
            forward = true;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, pauseAfterDeleting);
            return;
        }
        setTimeout(type, deletingSpeed);
    }
}

type();
const phrases = [
    "Mis juguetes y yo ya estamos listos! Acompáñame a brincar, reír y comer pastel en mi fiesta de 3 años.",
    "Colores, risas y mucha alegría... así va a ser mi cumpleaños."
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
(function infiniteLeaves() {
    const container = document.querySelector('.falling-leaves');

    // CONFIGURACIÓN
    const maxLeaves = 15;  // Máximo número de hojas al mismo tiempo
    const spawnInterval = 90; // Nueva hoja cada 0.6s

    function createLeaf() {
        const leaf = document.createElement('span');
        leaf.classList.add('leaf');

        const colors = ["#d4abab", "#e0b4b4", "#f2c1c1"];
        leaf.style.background = colors[Math.floor(Math.random() * colors.length)];

        // Tamaño aleatorio
        const size = Math.random() * 12 + 8; // 8px–20px
        leaf.style.width = size + "px";
        leaf.style.height = size * 1.4 + "px";

        // Posición X aleatoria
        leaf.style.left = Math.random() * 100 + "vw";

        // Velocidad variable
        leaf.style.animationDuration = (Math.random() * 8 + 7) + "s";

        // retraso aleatorio para fluidez
        leaf.style.animationDelay = (Math.random() * 3) + "s";

        // Cuando termine la animación -> eliminar
        leaf.addEventListener("animationend", () => leaf.remove());

        container.appendChild(leaf);
    }

    // Generación continua controlada
    setInterval(() => {
        const currentLeaves = container.querySelectorAll('.leaf').length;

        if (currentLeaves < maxLeaves) {
            createLeaf();
        }
    }, spawnInterval);
})();

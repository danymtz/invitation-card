/* (function generateLeaves() {
    const container = document.querySelector('.falling-leaves');
    const leafCount = 5; // Ajusta la cantidad

    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('span');
        leaf.classList.add('leaf');

        // Tamaño aleatorio
        const size = Math.random() * 12 + 8; // entre 8px y 20px
        leaf.style.width = size + "px";
        leaf.style.height = size * 1.4 + "px";

        // Posición inicial aleatoria en X
        leaf.style.left = Math.random() * 100 + "vw";

        // Duración aleatoria entre 7s y 15s
        leaf.style.animationDuration = (Math.random() * 8 + 7) + "s";

        // Delay aleatorio para que no caigan todas juntas
        leaf.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(leaf);
    }
})();
 */

(function infiniteLeaves() {
    const container = document.querySelector('.falling-leaves');

    // CONFIGURACIÓN
    const maxLeaves = 10;  // Máximo número de hojas al mismo tiempo
    const spawnInterval = 100; // Nueva hoja cada 0.6s

    function createLeaf() {
        const leaf = document.createElement('span');
        leaf.classList.add('leaf');

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

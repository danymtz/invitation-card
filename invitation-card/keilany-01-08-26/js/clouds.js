(function infiniteClouds() {
    const container = document.querySelector('.falling-leaves');

    const maxClouds = 8;
    const recentHeights = [];

    function getCloudHeight() {
        let height;
        let attempts = 0;

        do {
            height = Math.random() * 70;
            attempts++;
        } while (
            attempts < 10 &&
            recentHeights.some(previous => Math.abs(previous - height) < 12)
        );

        recentHeights.push(height);

        if (recentHeights.length > 8) {
            recentHeights.shift();
        }

        return height;
    }

    function createCloud() {
        const cloud = document.createElement('span');
        cloud.classList.add('cloud');

        // Tamaño aleatorio (profundidad)
        const size = Math.random() * 80 + 50; // 50px - 130px

        cloud.style.width = `${size}px`;
        cloud.style.height = `${size * 0.5}px`;

        // Altura con separación mínima
        cloud.style.top = `${getCloudHeight()}vh`;

        // Empieza fuera de pantalla
        cloud.style.left = `-${size * 2}px`;

        // Transparencia según distancia
        cloud.style.opacity = Math.max(0.35, size / 130);

        // Las grandes avanzan más rápido
        const duration = 60 - (size / 130) * 25;
        cloud.style.animationDuration = `${duration}s`;

        cloud.addEventListener('animationend', () => {
            cloud.remove();
        });

        container.appendChild(cloud);
    }

    // Crear varias nubes al inicio
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createCloud(), i * 500);
    }

    function scheduleNextCloud() {
        const delay = 2500 + Math.random() * 3500;

        setTimeout(() => {
            const currentClouds =
                container.querySelectorAll('.cloud').length;

            if (currentClouds < maxClouds) {
                createCloud();
            }

            scheduleNextCloud();
        }, delay);
    }

    scheduleNextCloud();
})();
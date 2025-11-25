const targetDate = new Date("2026-02-07T15:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "¡Es HOY!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `<div class="countdown" style="gap: 10px;">
            <p style="font-size: 20px;">Faltan</p>
            <div style="display: flex; justify-content: center; gap: 9px; text-align: center; color: #575757ff; text-underline-offset: 8px;line-height: 1.4;">
                <!-- Días -->
                <div class="time-block">
                    <div class="time-number">${days}</div>
                    <div class="time-label">Días</div>
                </div>

                <!-- Separador vertical -->
                <div class="separator"></div>

                <!-- Horas -->
                <div class="time-block">
                    <div class="time-number">${hours}</div>
                    <div class="time-label">Horas</div>
                </div>

                <!-- Dos puntos -->
                <div class="colon">:</div>

                <!-- Minutos -->
                <div class="time-block">
                    <div class="time-number">${minutes}</div>
                    <div class="time-label">Minutos</div>
                </div>

                <!-- Dos puntos -->
                <div class="colon">:</div>

                <!-- Segundos -->
                <div class="time-block">
                    <div class="time-number">${seconds}</div>
                    <div class="time-label">Segundos</div>
                </div>
            </div>
        </div>`
}

setInterval(updateCountdown, 1000);

updateCountdown();
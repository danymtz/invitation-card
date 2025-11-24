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
        `<div class="countdown">
            <p style="font-size: 20px;">Faltan</p>
            <p style="text-align=center; font-size: 14px;">${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos</p>
        </div>`
        
}

setInterval(updateCountdown, 1000);

updateCountdown();
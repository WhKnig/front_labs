document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const clickBtn = document.getElementById('click-btn');
    const cpsDisplay = document.getElementById('cps-label');

    if (counterDisplay && clickBtn && cpsDisplay) {
        let totalCount = parseInt(localStorage.getItem('clickCount')) || 0;
        let sessionClicks = 0;
        let sessionStartTime = null;
        let lastClicks = [];

        counterDisplay.textContent = totalCount;

        const updateCPS = () => {
            if (!sessionStartTime) return;

            lastClicks.push(sessionClicks);


            if (lastClicks.length >= 2) {
                const cps = (sessionClicks - lastClicks[lastClicks.length - 2]);

                cpsDisplay.textContent = `Среднее количество кликов в секунду (CPS): ${cps.toFixed(2)}`;
            }

        };

        clickBtn.addEventListener('click', () => {
            if (!sessionStartTime) {
                sessionStartTime = Date.now();
            }
            totalCount++;
            sessionClicks++;


            counterDisplay.textContent = totalCount;
            localStorage.setItem('clickCount', totalCount);
        });

        // Обновляем статистику каждые 500мс
        setInterval(updateCPS, 1000);
    }
});

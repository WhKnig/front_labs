document.addEventListener('DOMContentLoaded', () => {

    const circle = document.getElementById('blue-circle');

    if (circle) {

        const offsetX = 30;
        const offsetY = 30;

        document.addEventListener('mousemove', (e) => {
            const x = e.pageX - offsetX;
            const y = e.pageY - offsetY;

            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
        });
    }
});

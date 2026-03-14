function runTask3() {
    const urls = [];
    for (let i = 1; i <= 5; i++) {
        const url = prompt("Введите URL изображения №" + i + " (для параллельной загрузки):");
        if (url) urls.push(url);
    }
    const container = document.getElementById('image-container');
    container.innerHTML = '<h3>Загрузка (задача 4-3)...</h3>';
    urls.forEach(function(url) {
        const img = new Image();
        img.src = url;
        img.onload = function() {
            container.appendChild(img);
        };
        img.onerror = function() {
            const p = document.createElement('p');
            p.className = 'error';
            p.textContent = "Can't load image: " + url;
            container.appendChild(p);
        };
    });
}
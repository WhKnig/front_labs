function runTask2() {
    const urls = [];
    const count = 5;
    for (let i = 1; i <= count; i++) {
        const url = prompt("Введите URL изображения №" + i + ":");
        if (url) {
            urls.push(url);
        }
    }
    if (urls.length === 0) {
        alert("Список URL пуст.");
        return;
    }
    const container = document.getElementById('image-container');
    container.innerHTML = '<h3>4-2</h3>';
    function loadNext(index) {
        if (index >= urls.length) {
            container.insertAdjacentHTML('beforeend', '<p>Последовательная загрузка завершена.</p>');
            return;
        }
        const url = urls[index];
        const img = new Image();
        img.src = url;
        img.onload = function () {
            container.appendChild(img);
            loadNext(index + 1);
        };
        img.onerror = function () {
            const p = document.createElement('p');
            p.className = 'error';
            p.textContent = "Can't load image: " + url;
            container.appendChild(p);
            loadNext(index + 1);
        };
    }
    loadNext(0);
}
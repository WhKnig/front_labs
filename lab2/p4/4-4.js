function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Can't load image: " + url));
    });
}
async function runTask4_2() {
    const urls = [];
    for (let i = 1; i <= 5; i++) {
        const url = prompt("4-4: Введите URL " + i + " (последовательно):");
        if (url) urls.push(url);
    }
    const container = document.getElementById('image-container');
    container.innerHTML = '<h3>Загрузка (задача 4-4 последовательно)...</h3>';
    for (const url of urls) {
        try {
            const img = await loadImageAsync(url);
            container.appendChild(img);
        } catch (error) {
            const p = document.createElement('p');
            p.className = 'error';
            p.textContent = error.message;
            container.appendChild(p);
        }
    }
}
async function runTask4_3() {
    const urls = [];
    for (let i = 1; i <= 5; i++) {
        const url = prompt("4-4: Введите URL " + i + " (параллельно):");
        if (url) urls.push(url);
    }
    const container = document.getElementById('image-container');
    container.innerHTML = '<h3>Загрузка (задача 4-4 параллельно)...</h3>';
    const promises = urls.map(url =>
        loadImageAsync(url)
            .then(img => {
                container.appendChild(img);
                return img;
            })
            .catch(error => {
                const p = document.createElement('p');
                p.className = 'error';
                p.textContent = error.message;
                container.appendChild(p);
            })
    );
    await Promise.allSettled(promises);
    container.insertAdjacentHTML('beforeend', '<p>Все задания завершены.</p>');
}
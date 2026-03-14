async function runTask5() {
    const ips = [];
    for (let i = 1; i <= 5; i++) {
        const ip = prompt("Введите IP-адрес №" + i + " для проверки:");
        if (ip) ips.push(ip.trim());
    }
    if (ips.length === 0) {
        alert("Список IP пуст.");
        return;
    }
    const container = document.getElementById('image-container');
    container.innerHTML = '<h3>Результаты проверки IP:</h3>';
    const blockedList = [
        "Russia", "Belarus", "Afghanistan", "China", "Venezuela", "Iran",
        "RU", "BY", "AF", "CN", "VE", "IR",
        "Россия", "Беларусь", "Афганистан", "Китай", "Венесуэла", "Иран"
    ];
    let accessDenied = false;
    for (const ip of ips) {
        try {
            const response = await fetch(`https://json.geoiplookup.io/${ip}`);
            if (!response.ok) {
                throw new Error("Ошибка при запросе к API");
            }
            const data = await response.json();
            const countryName = data.country_name || "Unknown";
            const countryCode = data.country_code || "??";
            const p = document.createElement('p');
            p.textContent = `• IP: ${ip} — Страна: ${countryName} (${countryCode})`;
            container.appendChild(p);
            if (blockedList.includes(countryName) || blockedList.includes(countryCode)) {
                accessDenied = true;
            }
        } catch (error) {
            console.error(error);
            const p = document.createElement('p');
            p.className = 'error';
            p.textContent = `! Ошибка: Не удалось получить данные для IP ${ip}`;
            container.appendChild(p);
        }
    }
    if (accessDenied) {
        alert("Our services are not available in your country");
    } else {
        alert("Welcome to our website!");
    }
}
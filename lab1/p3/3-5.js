const btn3_5 = document.getElementById("btn3_5");

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

btn3_5.addEventListener("click", () => {
    const inputString = prompt('Введите JSON объект для копирования (например, {"a": 1, "b": [2,3]}):');
    if (inputString === null) return;

    try {
        const trimmed = inputString.trim();
        if (trimmed === "") {
            alert("Empty input");
            return;
        }

        const original = JSON.parse(trimmed);
        const copied = deepCopy(original);

        alert("Копия создана успешно.\nРезультат: " + JSON.stringify(copied));
        console.log("Original:", original);
        console.log("Copy:", copied);
        console.log("Are different objects?", original !== copied);

    } catch (e) {
        alert("Ошибка: Невалидный JSON");
    }
});

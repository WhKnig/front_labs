const btn_check4 = document.getElementById("btn_check4");

btn_check4.addEventListener("click", () => {
    const original = prompt("Введите строку для проверки на палиндром:");
    if (original === null) return;

    const trimmed = original.trim();

    if (trimmed === "") {
        alert("Empty string");
        return;
    }

    const cleaned = trimmed.toLowerCase().replace(/\s/g, "");
    const reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
        alert("Да");
    } else {
        alert("Нет");
    }
});

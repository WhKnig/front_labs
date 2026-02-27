const btn_check3 = document.getElementById("btn_check3");

btn_check3.addEventListener("click", () => {
    const input_value = prompt("Введите слова через запятую:");
    if (input_value === null) return;

    const trimmed = input_value.trim();

    if (trimmed === "") {
        alert("Empty string");
        return;
    }

    if (!trimmed.includes(",")) {
        alert("Invalid format");
        return;
    }

    const output_value = trimmed
        .split(",")
        .map(word => word.trim())
        .filter(word => word.length > 0)
        .join(".");

    alert(output_value);
});

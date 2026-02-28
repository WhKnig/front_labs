const btn3_2 = document.getElementById("btn3_2");

function getRemainders(arr) {
    return arr.map(n => n % 5);
}

btn3_2.addEventListener("click", () => {
    const value = prompt("Введите числа через запятую для получения остатков от деления на 5:");
    if (value === null) return;

    const nums = value.trim().split(/[\s,]+/)
        .map(n => parseInt(n))
        .filter(n => !isNaN(n));

    const remainders = getRemainders(nums);
    alert("Остатки от деления на 5: " + remainders.join(", "));
});

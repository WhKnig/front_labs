const btn3_1 = document.getElementById("btn3_1");

btn3_1.addEventListener("click", () => {
    const value = prompt("Введите список натуральных чисел через запятую или пробел:");
    if (value === null) return;

    const nums = value.trim().split(/[\s,]+/)
        .map(n => parseInt(n))
        .filter(n => !isNaN(n));

    nums.sort((a, b) => a - b);

    alert("Отсортированный список: " + nums.join(", "));
});

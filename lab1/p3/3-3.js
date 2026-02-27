const btn3_3 = document.getElementById("btn3_3");

function calculateMedian(...args) {
    if (args.length === 0) return 0;

    const sorted = args.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

btn3_3.addEventListener("click", () => {
    const value = prompt("Введите числа через запятую для вычисления медианы:");
    if (value === null) return;

    const nums = value.trim().split(/[\s,]+/)
        .map(n => parseFloat(n))
        .filter(n => !isNaN(n));

    if (nums.length === 0) {
        alert("Список пуст");
        return;
    }

    const median = calculateMedian(...nums);

    alert("Медиана: " + median);
});

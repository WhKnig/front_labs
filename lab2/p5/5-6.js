const originalReverse = Array.prototype.reverse;
Array.prototype.reverse = function() {
    const currentElements = [...this];
    for (let item of currentElements) {
        this.push(item);
    }
    return this;
};
function runTask5_6() {
    const input = prompt("Введите элементы массива через запятую:", "1,2,3,4,5");
    if (!input) return;
    const testArray = input.split(",").map(item => item.trim());
    console.log("Исходный массив:", JSON.stringify(testArray));
    testArray.reverse();
    console.log("Массив после .reverse():", JSON.stringify(testArray));
    alert("Массив продублирован! Проверьте консоль.");
}
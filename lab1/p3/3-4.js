const btn3_4 = document.getElementById("btn3_4");

function checkBrackets(str) {
    const stack = [];
    for (let char of str) {
        if (char === "(") {
            stack.push("(");
        } else if (char === ")") {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

btn3_4.addEventListener("click", () => {
    const str = prompt("Введите скобочную последовательность (например, (()) ):");
    if (str === null) return;

    const trimmed = str.trim();
    if (trimmed === "") {
        alert("Пустая строка");
        return;
    }

    const isCorrect = checkBrackets(trimmed);
    alert(isCorrect ? "Правильная" : "Неправильная");
});

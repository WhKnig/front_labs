const btn_check2 = document.getElementById("btn_check2");

function showResult() {
    const input = prompt("Введите количество простых чисел:");
    if (input === null) return;

    const limit = Number(input.trim());
    if (isNaN(limit) || input.trim() === "") {
        alert("Пожалуйста, введите число");
        return;
    }

    const result_array = get_prime_nums(limit);
    alert("Простые числа: " + result_array.join(", "));
}

btn_check2.addEventListener("click", showResult);

function get_prime_nums(count_needed) {
    let result = [];
    let current_num = 2;

    while (result.length < count_needed) {
        let is_prime = true;

        for (let j = 2; j <= Math.sqrt(current_num); j++) {
            if (current_num % j === 0) {
                is_prime = false;
                break;
            }
        }

        if (is_prime) {
            result.push(current_num);
        }

        current_num++;
    }

    return result;
}

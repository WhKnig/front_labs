const btn_down = document.getElementById("btn_down");
const btn_up = document.getElementById("btn_up");
const inpt_step = document.getElementById("inpt_value_for_chenge");
const inpt_num = document.getElementById("num");

/**
 * Объект Counter с требуемыми методами.
 * Логика обновлена для более "нормальной" работы: 
 * состояние хранится в объекте и синхронизируется с полем ввода.
 */
const Counter = {
    count: 0,
    add(value) {
        this.count += value;
        this.updateView();
    },
    sub(value) {
        this.count -= value;
        this.updateView();
    },
    updateView() {
        inpt_num.value = this.count;
    }
};

function getStep() {
    const value = inpt_step.value.trim();
    const step = parseFloat(value);
    return (isNaN(step) || value === "") ? 1 : step;
}

function syncFromInput() {
    const value = inpt_num.value.trim();
    const current = parseFloat(value);
    Counter.count = (isNaN(current) || value === "") ? 0 : current;
}

btn_up.addEventListener("click", () => {
    syncFromInput();
    Counter.add(getStep());
});

btn_down.addEventListener("click", () => {
    syncFromInput();
    Counter.sub(getStep());
});

// Инициализация при загрузке, чтобы подхватить дефолтные значения (если есть)
syncFromInput();
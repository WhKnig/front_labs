class UserProtected {
    constructor(name, tel) {
        this.name = name;
        this._tel = tel;
    }
    get tel() {
        return this._tel;
    }
    set tel(value) {
        const regex = /^\+7\d{10}$/;
        if (regex.test(value)) {
            this._tel = value;
            console.log(`[OK] Номер для ${this.name} установлен: ${value}`);
        } else {
            console.log(`[Error] Номер "${value}" некорректен. Требуется формат +7XXXXXXXXXX`);
            alert("Неверный формат телефона! Попробуйте еще раз.");
        }
    }
}
function runTask5_3() {
    const name = prompt("Введите имя:");
    const initialTel = prompt("Введите начальный телефон (+7XXXXXXXXXX):", "+70000000000");
    const user = new UserProtected(name, initialTel);
    console.log(`Начальный телефон для ${user.name}: ${user.tel}`);
    const newTel = prompt("Введите новый номер телефона для проверки сеттера (+7XXXXXXXXXX):", "+71234567890");
    user.tel = newTel;
    console.log(`Текущий телефон в объекте: ${user.tel}`);
}
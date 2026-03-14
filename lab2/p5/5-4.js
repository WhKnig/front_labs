class UserWithPrivateAge {
    #age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get age() {
        return this.#age;
    }
    set age(value) {
        const val = parseInt(value);
        if (!isNaN(val) && val >= 1 && val <= 100) {
            this.#age = val;
            console.log(`Возраст успшено изменен на: ${this.#age}`);
        } else {
            console.log(`Ошибка: "${value}" — некорректный возраст (нужно 1-100).`);
        }
    }
}
function runTask5_4() {
    const name = prompt("Введите имя:");
    const age = prompt("Введите начальный возраст (1-100):", "20");
    const user = new UserWithPrivateAge(name, age);
    console.log(`Текущий возраст ${user.name}: ${user.age}`);
    const newAge = prompt(`Введите новый возраст для ${user.name} (1-100):`);
    user.age = newAge;
    console.log(`Итоговый возраст в объекте: ${user.age}`);
}
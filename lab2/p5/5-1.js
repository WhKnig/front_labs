class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}
function runTask5_1() {
    const name = prompt("Введите имя для User:");
    const age = prompt("Введите возраст для User:");
    const user = new User(name, age);
    user.hello();
    alert("Результат выведен в консоль (на странице под кнопками).");
}
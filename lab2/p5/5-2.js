function UserOldWay(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    };
}
function runTask5_2() {
    const name = prompt("Введите имя (5-2):");
    const age = prompt("Введите возраст (5-2):");
    const user = new UserOldWay(name, age);
    user.hello();
    alert("Результат выведен в консоль (функция-конструктор).");
}
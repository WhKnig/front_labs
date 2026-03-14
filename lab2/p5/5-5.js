if (typeof User === 'undefined') {
    window.User = class {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        hello() {
            console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
        }
    };
}
class Student extends User {
    #knowledge = 0;
    constructor(name, age) {
        super(name, age);
    }
    hello() {
        console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`);
    }
    learn() {
        this.#knowledge++;
        console.log(`Студент ${this.name} поучился. Уровень знаний теперь: ${this.#knowledge}`);
    }
    get knowledge() {
        return this.#knowledge;
    }
}
function runTask5_5() {
    const name = prompt("Введите имя студента:");
    const age = prompt("Введите возраст студента:");
    const s = new Student(name, age);
    s.hello();
    s.learn();
    s.learn();
    console.log(`Итоговый уровень знаний (через геттер): ${s.knowledge}`);
}
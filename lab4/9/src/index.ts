
const outputElement = typeof document !== 'undefined' ? document.getElementById('console-output') : null;
if (outputElement) outputElement.innerHTML = '';

const originalLog = console.log;
console.log = (...args: any[]) => {
    originalLog(...args);
    if (outputElement) {
        outputElement.innerHTML += args.map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
        ).join(' ') + '\n';
    }
};

import { User } from './user.js';
import { distance } from './distance.js';
import { BinaryTree } from './tree.js';
import { Calculator, CreditCardPayment, NewsAgency, NewsSubscriber, OldPrinter, PrinterAdapter } from './patterns.js';

console.log('=== TypeScript Lab 4 Task ===\n');


console.log('Tasks 2-3: User class');
const user = new User("Semyon", 99);
user.hello();
console.log('');


console.log('Task 4: Overloaded distance function');
console.log('Coords (0,0,3,4):', distance(0, 0, 3, 4));
console.log('Points {x:10,y:10}, {x:20,y:20}:', distance({ x: 10, y: 10 }, { x: 20, y: 20 }));
console.log('');


console.log('Task 5: Binary Tree');
const tree = new BinaryTree<number>((a, b) => a - b);
[20, 10, 30, 5, 15].forEach(v => tree.insert(v));
console.log('Tree height:', tree.getHeight());
console.log('Search 15:', tree.search(15) ? 'Found' : 'Not found');
console.log('');


console.log('Task 6: Design Patterns');
const calc = new Calculator(new CreditCardPayment());
calc.executePayment(500);

const printer = new PrinterAdapter(new OldPrinter());
printer.print("Hello Adapter");

const agency = new NewsAgency();
agency.subscribe(new NewsSubscriber("Agent Smith"));
agency.notify("System Update Complete");

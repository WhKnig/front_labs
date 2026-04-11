/**
 * 1. STRATEGY PATTERN
 * Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
 */
interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class Calculator {
    private strategy: PaymentStrategy;
    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }
    executePayment(amount: number) {
        this.strategy.pay(amount);
    }
}

/**
 * 2. ADAPTER PATTERN
 * Allows objects with incompatible interfaces to collaborate.
 */
class OldPrinter {
    printLegacy(text: string) {
        console.log(`Legacy Print: ${text}`);
    }
}

interface NewPrinter {
    print(text: string): void;
}

class PrinterAdapter implements NewPrinter {
    constructor(private oldPrinter: OldPrinter) {}
    print(text: string): void {
        this.oldPrinter.printLegacy(text);
    }
}

/**
 * 3. OBSERVER PATTERN
 * Defines a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
 */
interface Observer {
    update(message: string): void;
}

class NewsAgency {
    private observers: Observer[] = [];
    
    subscribe(observer: Observer) {
        this.observers.push(observer);
    }
    
    notify(message: string) {
        this.observers.forEach(o => o.update(message));
    }
}

class NewsSubscriber implements Observer {
    constructor(private name: string) {}
    update(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

export { CreditCardPayment, PayPalPayment, Calculator, OldPrinter, PrinterAdapter, NewsAgency, NewsSubscriber };

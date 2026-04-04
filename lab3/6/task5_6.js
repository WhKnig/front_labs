document.addEventListener('DOMContentLoaded', () => {
    const displayElement = document.getElementById('display');
    const calcButtons = document.querySelectorAll('.calc-btn');

    if (displayElement && calcButtons.length > 0) {
        let currentExpr = "";

        calcButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.dataset.val;

                if (val === 'C') {
                    currentExpr = "";
                    displayElement.textContent = "0";
                } else if (val === '=') {
                    try {
                        const result = evaluateExpression(currentExpr);
                        displayElement.textContent = result;
                        currentExpr = result.toString();
                    } catch (err) {
                        displayElement.textContent = "Error";
                        currentExpr = "";
                    }
                } else {
                    if (currentExpr === "0" && !isNaN(val)) {
                        currentExpr = val;
                    } else {
                        currentExpr += val;
                    }
                    displayElement.textContent = currentExpr || "0";
                }
            });
        });
    }



    function evaluateExpression(expr) {
        if (!expr) return 0;
        const tokens = tokenize(expr);

        try {
            return evaluateRPNStrict(tokens);
        } catch (e) {
            const rpn = shuntingYard(tokens);
            return evaluateRPNStrict(rpn);
        }
    }

    function tokenize(s) {
        const res = [];
        let num = '';
        const ops = ['+', '-', '*', '/', '(', ')'];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (ops.includes(char)) {
                if (num) {
                    res.push(parseFloat(num));
                    num = '';
                }
                res.push(char);
            } else if (char === ' ') {
                if (num) {
                    res.push(parseFloat(num));
                    num = '';
                }
            } else {
                num += char;
            }
        }
        if (num) res.push(parseFloat(num));
        return res;
    }

    function shuntingYard(tokens) {
        const outputQueue = [];
        const operatorStack = [];
        const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

        tokens.forEach(token => {
            if (typeof token === 'number') {
                outputQueue.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.pop();
            } else {
                while (operatorStack.length > 0 &&
                    operatorStack[operatorStack.length - 1] !== '(' &&
                    precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            }
        });

        while (operatorStack.length > 0) {
            outputQueue.push(operatorStack.pop());
        }
        return outputQueue;
    }

    function evaluateRPNStrict(rpn) {
        const stack = [];
        rpn.forEach(token => {
            if (typeof token === 'number') {
                stack.push(token);
            } else {
                if (stack.length < 2) throw new Error("Invalid");
                const b = stack.pop();
                const a = stack.pop();
                switch (token) {
                    case '+': stack.push(a + b); break;
                    case '-': stack.push(a - b); break;
                    case '*': stack.push(a * b); break;
                    case '/': stack.push(b !== 0 ? a / b : 0); break;
                }
            }
        });
        if (stack.length !== 1) throw new Error("Invalid");
        return stack[0];
    }
});

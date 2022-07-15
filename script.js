const previousOperandTextElement = document.querySelector("[data-type='previous-operand']");
const currentOperandTextElement = document.querySelector("[data-type='current-operand']");
const numbersBtn = document.querySelectorAll("[data-type='number']");
const operatorsBtn = document.querySelectorAll("[data-type='operator']");
const allClearBtn = document.querySelector("[data-type='reset']");
const clearBtn = document.querySelector("[data-type='backspace']");
const decimalBtn = document.querySelector("[data-type='decimal']");
const equalsBtn = document.querySelector("[data-type='equal']");



class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentoperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNumber(number) {

    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numbersBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.appendNumber(btn.textContent);
        calculator.updateDisplay();
    });
});


console.log(calculator);


function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, number1, number2) {
    number1 = Number(number1);
    number2 = Number(number2);

    switch (operator) {
        case "+":
            return add(number1, number2);
            break;
        case "-":
            return subtract(number1, number2);
            break;
        case "x":
            return multiply(number1, number2);
            break;
        case "/":
            if (number2 === 0) {
                return null;
            } else {
                return divide(number1, number2);
            }
        default:
            return null;
    }

}
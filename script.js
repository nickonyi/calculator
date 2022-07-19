const previousOperandTextElement = document.querySelector("[data-type='previous-operand']");
const currentOperandTextElement = document.querySelector("[data-type='current-operand']");
const numbersBtn = document.querySelectorAll("[data-type='number']");
const operatorsBtn = document.querySelectorAll("[data-type='operator']");
const allClearBtn = document.querySelector("[data-type='reset']");
const clearBtn = document.querySelector("[data-type='backspace']");
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
        this.operation;
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    updateDisplay() {
        this.currentoperandTextElement.textContent = this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            this.previousOperandTextElement.textContent = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement = "";
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";

    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "x":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            case "%":
                computation = prev / 100;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";

    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }


    getDisplayNumber(number) {
        const floatNumber = parseFloat(number);

        if (isNaN(floatNumber)) return '';
        return floatNumber.toLocaleString('en');
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
console.log(calculator);
numbersBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.appendNumber(btn.textContent);
        calculator.updateDisplay();
    });
});

operatorsBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
    });
});


equalsBtn.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearBtn.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

clearBtn.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});
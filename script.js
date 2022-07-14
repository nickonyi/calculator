const screenLast = document.getElementById("lastOperationScreen");
const screenCurrent = document.getElementById("currentoperationscreen");
const allBtns = document.querySelector('.all-button');
allBtns.forEach(btn => btn.addEventListener('click', ))
screenLast = allBtn.textContent;

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
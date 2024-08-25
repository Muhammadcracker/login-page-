let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return; // Do nothing if no input

    operand1 = currentInput;
    operator = op;
    currentInput = '';
}

function calculate() {
    if (operator === '' || currentInput === '' || operand1 === '') return;

    operand2 = currentInput;
    let result;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
    currentInput = result;
    operator = '';
    operand1 = '';
    operand2 = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    document.getElementById('display').value = '';
}


let displayValue = ''; 
let stack = []; 

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function operation(operator) {
    if (displayValue !== '') {
        stack.push(parseFloat(displayValue)); 
        stack.push(operator); 
        displayValue = ''; 
    }
}

function calculate() {
    if (displayValue !== '') {
        stack.push(parseFloat(displayValue)); 
        displayValue = ''; 

        let result = stack[0]; 
        for (let i = 1; i < stack.length; i += 2) {
            let operator = stack[i];
            let number = stack[i + 1];
            switch (operator) {
                case '+':
                    result += number;
                    break;
                case '-':
                    result -= number;
                    break;
                case '*':
                    result *= number;
                    break;
                case '/':
                    if (number !== 0) {
                        result /= number;
                    } else {
                        result = 'Error';
                    }
                    break;
                default:
                    break;
            }
        }

        document.getElementById('display').value = result;
        stack = [];
    }
}

function clearDisplay() {
    displayValue = '';
    stack = [];
    document.getElementById('display').value = '';
}

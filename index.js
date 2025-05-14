let operator = '';
let previousNumber = '';
let currentNumber = '';

document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const clearButton = document.querySelector('#clear-btn');
    const equalButton = document.querySelector('.equal');
    const decimalButton = document.querySelector('.decimal');
    const previousDisplay = document.querySelector('.previous');
    const currentDisplay = document.querySelector('.current');

    numbers.forEach (number => {number.addEventListener('click' , e => {
        handleNumber(e.target.textContent);
        currentDisplay.textContent = currentNumber;

    })})

    operators.forEach (op => {op.addEventListener ('click' , e => {
        handleOperator(e.target.textContent);
        previousDisplay.textContent = `${previousNumber} ${operator}`;
        currentDisplay.textContent = currentNumber;
    })})

    equalButton.addEventListener('click' ,() => {
        calculate();
        previousDisplay.textContent = '';
        currentDisplay.textContent = currentNumber;
    })

    clearButton.addEventListener('click', () => {
        clearAll();
        previousDisplay.textContent = '';
        currentDisplay.textContent = '0';
    })

    decimalButton.addEventListener('click' , () => {
        addDecimal();
        currentDisplay.textContent = currentNumber;
    })

});


function handleNumber (num) {
    if (currentNumber.length < 6) {
        currentNumber += num;
    }
}


function handleOperator (op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate () {
    currentNumber = Number(currentNumber);
    previousNumber = Number(previousNumber);
    
    switch (operator) {
        case '+':
            currentNumber += previousNumber;
            break;
        case '-':
            currentNumber = previousNumber - currentNumber;
            break;
        case 'x':
            currentNumber = previousNumber * currentNumber;
            break;
        case '/':
            currentNumber = previousNumber / currentNumber;
            break;
    }
    currentNumber = currentNumber.toString(); 
}

function clearAll () {
    operator = '';
    previousNumber = '';
    currentNumber = '';
}

function addDecimal () {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
}
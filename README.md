let operator = '';
let currentNumber = '';
let previousNumber = '';

document.addEventListener('DOMContentLoaded' , () => {

    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const clear = document.querySelector('#clear-btn');
    const decimal = document.querySelector('.decimal');
    const equal = document.querySelector('.equal');
    const previousDisplay= document.querySelector('.previous')
    const currentDisplay= document.querySelector('.current')

    numbers.forEach(number => {
        number.addEventListener('click' , (e) => {
            handleNumber(e.target.textContent);
            currentDisplay.textContent = currentNumber;
        })
    })


    operators.forEach(op => {op.addEventListener('click' , (e) => {
        handleOperator(e.target.textContent);
        previousDisplay.textContent = `${previousNumber} ${operator}`;
        currentDisplay.textContent = currentNumber;
    })})

    equal.addEventListener('click' , () => {
        if (currentNumber !== '' && previousNumber !== '') {
            calculate();
            previousDisplay.textContent = '';
            currentDisplay.textContent = currentNumber;
            
        }
    })

    clear.addEventListener('click' , () => {
        clearAll();
        previousDisplay.textContent = '';
        currentDisplay.textContent = '';
    })

    decimal.addEventListener('click' , () => {
        addDecimal();
        currentDisplay.textContent = currentNumber;
    })

})



function handleNumber (num){
    currentNumber += num;
}


function handleOperator (op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate () {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    switch (operator) {
        case '+':
            currentNumber = previousNumber + currentNumber;
            break;

        case '-':
            currentNumber = previousNumber - currentNumber;
            break;
        
        case 'x':
           currentNumber =  currentNumber * previousNumber;
            break;
        
        case '/':
            currentNumber = previousNumber / currentNumber;
            break;
    }

    currentNumber = currentNumber.toString();
}


function clearAll () {
    currentNumber = '';
    previousNumber = '';
    operator = '';
}


function addDecimal () {
        if (!currentNumber.includes('.')) {
            currentNumber += '.';
        }
}

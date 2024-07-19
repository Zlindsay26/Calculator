let num1 = 0;
let num2 = 0;
let operator = '';
let displayValue = '';
let hasNumber = false;

const display = document.getElementById('display');
display.textContent = '0';
const container = document.getElementById('buttons');

//buttons are put into 'rows' for calculator design purposes//
//row 1//
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const divideBtn = document.getElementById('/');
//row 2//
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const multiplyBtn = document.getElementById('*');
//row 3//
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const subtractBtn = document.getElementById('-'); 
//row 4//
const button0 = document.getElementById('0');
const decimalBtn = document.getElementById('.');
const equalBtn = document.getElementById('=');
const addBtn = document.getElementById('+');
//row 5//
const backspace = document.getElementById('backspace');
const clearBtn = document.getElementById('clear');

function updateDisplay(displayValue) {
    let numOfDigits = displayValue.length;
    if (numOfDigits > 20){
alert('Too many digits');
    } else {
    display.textContent = displayValue;
    }
}

function appendToDisplay(value) {
    let currentDisplayValue = display.textContent;
    currentDisplayValue += value;
    updateDisplay(currentDisplayValue);
}

button7.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '7'; 
    } else {
        appendToDisplay('7'); 
    }
    hasNumber = true;
    });
button8.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '8'; 
    } else {
        appendToDisplay('8'); 
    }
    hasNumber = true;
    });
button9.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '9'; 
    } else {
        appendToDisplay('9'); 
    }
    hasNumber = true;
    });
button4.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '4'; 
    } else {
        appendToDisplay('4'); 
    }
    hasNumber = true;
    });
button5.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '5'; 
    } else {
        appendToDisplay('5'); 
    }
    hasNumber = true;
    });
button6.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '6'; 
    } else {
        appendToDisplay('6'); 
    }
    hasNumber = true;
    });
button1.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '1'; 
    } else {
        appendToDisplay('1'); 
    }
    hasNumber = true;
    });
button2.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '2'; 
    } else {
        appendToDisplay('2'); 
    }
    hasNumber = true;
    })
button3.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '3'; 
    } else {
        appendToDisplay('3'); 
    }
    hasNumber = true;
    });
button0.addEventListener('click', () => {
    hasNumber = true;
    appendToDisplay('0');
    });
multiplyBtn.addEventListener('click', () => {
    if (hasNumber) {
    appendToDisplay('*');
    }
    });
divideBtn.addEventListener('click', () => {
    if (hasNumber) {
    appendToDisplay('/');
    }
    });
subtractBtn.addEventListener('click', () => {
    if (hasNumber) {
    appendToDisplay('-');
    }
    });
addBtn.addEventListener('click', () => {
    if (hasNumber) {
    appendToDisplay('+');
    }
    });
decimalBtn.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
    appendToDisplay('.');
    }
    });
equalBtn.addEventListener('click', () => {
    let equation = display.textContent;
    let parts = equation.split(/([+\-*\/])/).filter(part => part.trim() !== '');
    if (parts && parts.length >= 3) {
    let result = parseFloat(parts[0]); 
    let i = 1;

    while (i < parts.length) {
    let operator = parts[i];
    let nextNumber = parseFloat(parts[i + 1]);

    switch (operator) {
    case '+':
        result += nextNumber;
    break;
    case '-':
        result -= nextNumber;
    break;
    case '*':
        result *= nextNumber;
    break;
    case '/':
     if (nextNumber === 0) {
        display.textContent = ('You can do better than that!');
     return;
    }
        result /= nextNumber;
    break;
    default:
        updateDisplay('Error');
     return;
    }
        i += 2; 
    }
        updateDisplay(result.toString());

        num1 = result.toString();
        num2 = '';
        operator = '';
        hasNumber = true;
    } else {
        updateDisplay('Error');
    }
});
                     
backspace.addEventListener('click', () => {
    let goBack = display.textContent;
    if (goBack.length > 0) {
    goBack = goBack.slice(0, -1);
    display.textContent = goBack;
    }
    });
clearBtn.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator = '';
    display.textContent = '';
    hasNumber = false;
    });
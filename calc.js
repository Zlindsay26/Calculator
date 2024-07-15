let num1 = 0;
let num2 = 0;
let operator = '';
let displayValue = '';
let hasNumber = false;

const display = document.getElementById('display');
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


function add(num1, num2){
return num1 + num2;
}

function subtract(num1, num2){
return num1 - num2;
}

function multiply(num1, num2){
return num1 * num2;
}

function divide(num1, num2){
return num1 / num2;
}

function operate(num1, operator, num2){
switch (operator) {
    case '+':
        return add(num1, num2);
    case '-':
        return subtract(num1, num2);
    case '*': 
        return multiply(num1, num2);
    case '/':
        return divide(num1, num2);
    default:
        return 'invalid operator';

}
};

function getEquation(){

};

function updateDisplay(displayValue) {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}


function appendToDisplay(value) {
    const display = document.getElementById('display');
    var currentDisplayValue = display.textContent;
    currentDisplayValue += value;
    updateDisplay(currentDisplayValue);
}

button7.addEventListener('click', () => {
    hasNumber = true;
    appendToDisplay('7');
    });
    button8.addEventListener('click', () => {
        hasNumber = true;
        appendToDisplay('8');
        });
        button9.addEventListener('click', () => {
            hasNumber = true;
            appendToDisplay('9');
            });
            button4.addEventListener('click', () => {
                hasNumber = true;
                appendToDisplay('4');
                });
                button5.addEventListener('click', () => {
                    hasNumber = true;
                    appendToDisplay('5');
                    });
                    button6.addEventListener('click', () => {
                        hasNumber = true;
                        appendToDisplay('6');
                        });
                        button1.addEventListener('click', () => {
                            hasNumber = true;
                            appendToDisplay('1')
                            });
                            button2.addEventListener('click', () => {
                                hasNumber = true;
                                appendToDisplay('2');
                                });
                                button3.addEventListener('click', () => {
                                    hasNumber = true;
                                    appendToDisplay('3');
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
                                         operate(num1, operator, num2);
                                        });
                                        backspace.addEventListener('click', () => {

                                        });
                                        clearBtn.addEventListener('click', () => {

                                        });
let num1 = '';
let num2 = '';
let operator = '';
let total = '';
let displayValue;

const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const divideBtn = document.getElementById('/');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const multiplyBtn = document.getElementById('*');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const subtractBtn = document.getElementById('-'); 
const button0 = document.getElementById('0');
const decimalBtn = document.getElementById('.');
const equalBtn = document.getElementById('=');
const addBtn = document.getElementById('+');
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

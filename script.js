const add = function(a, b) {
    let res = a + b;
    return res;
}

const subtract = function(a, b) {
    let res = a - b;
    return res;
}

const multiply = function(a, b) {
    let res = a * b;
    return res;
}

const divide = function(a, b) {
    let res = a / b;
    return res;

}

const operate = function(operation, a , b) {
    result = operation(a,b);
    return result;
}

const lastOperation = document.getElementById('lastOperation');
const currentOperation = document.getElementById('currentOperation');
const numBtns = document.getElementsByClassName('btn');
const oppBtns = document.getElementsByClassName('opp');
const equalsBtn = document.getElementById('execute');

let displayValue = "";
let isEmpty = true;
let bIsSet = false;
let aIsSet = false;
let a = null;
let b = null;

Array.from(numBtns).forEach(function(btn) 
{
    btn.addEventListener('click', () => {
        displayValue += btn.dataset.value;
        currentOperation.innerText = displayValue;
        isEmpty = false;
        return displayValue;
    });
});

Array.from(oppBtns).forEach(function(btn) {
    
    btn.addEventListener('click', () => {
        if (isEmpty === false && aIsSet === false) {
            operation = btn.dataset.opp;
            a = parseInt(displayValue);
            aIsSet = true;
        }
    displayValue += btn.dataset.value; 
    lastOperation.innerText = displayValue;
    displayValue = '';
    currentOperation.innerText = "";
    });
});

equalsBtn.addEventListener('click', () => {
    if (isEmpty === false && aIsSet === true && bIsSet === false) {
        b = parseInt(displayValue);
        displayValue += equalsBtn.dataset.value;
        lastOperation.innerText += displayValue;
        if (operation === "divide") {
            displayValue = divide(a,b);
            currentOperation.innerText = displayValue;
        }
        if (operation === "add") {
            displayValue = add(a,b);
            currentOperation.innerText = displayValue;
        }
        if (operation === "subtract") {
            displayValue = subtract(a,b);
            currentOperation.innerText = displayValue;
        }
        if (operation === "multiply") {
            displayValue = multiply(a,b)
            currentOperation.innerText = displayValue;
        }
        aIsSet = false; 
    }
});

const clrBtn = document.getElementById('clr');
clrBtn.addEventListener('click', () => {
    a = null;
    b = null;
    displayValue = "";
    currentOperation.innerText = "0";
    lastOperation.innerText = "";
    isEmpty = true;
    bIsSet = false;
    aIsSet = false;
})
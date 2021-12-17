const buttons = document.querySelectorAll("#buttons-con > div > button");
let display = [];
let operator = null;
let isOperating = false;
let disableD = false;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.value;
        assignValue(value);
    });
});

window.addEventListener("keydown", (e) => {
    
    // document.querySelector(`.key[data-key="${e.keyCode}"]`)
    value = document.querySelector(`button[data-key="${e.key}"]`).value;
    assignValue(value);
});

function assignValue(value) {
    switch(value) {
        case value.replace(/\D/, ""):
            console.log(value);
            break;
        case "clear":
            console.log(value);
            break;
        case "clearall":
            console.log(value);
            break;
        case ".":
            console.log(value);
            break;
        case value.replace(/\W\D[.]/, ""):
            console.log(value);
            break;
    }
}

function add(a, b) {
    return a + b.toFixed(2);
}

function subtract(a, b) {
    return a - b.toFixed(2);
}

function multiply(a, b) {
    return a * b.toFixed(2);
}

function divide(a, b) {
    return a / b.toFixed(2);
}

function clearAll(array) {
    return displayValue = "0";
}

function clear(displayValue) {
    return displayValue.pop();
}

function operate(operator, numOne, numTwo) {
    switch(operator) {
        case "+":
            return add(numOne, numTwo);
        case "−":        
            return subtract(numOne, numTwo);
        case "×":
            return multiply(numOne, numTwo);
        case "÷":
            return divide(numOne, numTwo);
    }
}

function getOperator(value) {
    switch(value) {
        case "+":
            operator = "+";
            return true;
        case "−":       
            operator = "−";
            return true;
        case "×":
            operator = "×";
            return true;
        case "÷":
            operator = "÷";
            return true;
    }
    return false;
}

function disableDecimal(disableD, value) {
    return disableD ? true : false;
}

function ifDecimal(array) {
    return array.includes(".");
}


function displayResults() {
    const result = document.querySelector("#result");
    result.textContent = display.join("");


}
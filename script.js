const buttons = document.querySelectorAll("#buttons-con > div > button");
let display = [];
let operator = null;
let isOperating = false;
let disableD = false;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.value;
        displayProcessing(value);
    });
});


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
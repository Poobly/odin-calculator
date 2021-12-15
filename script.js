const buttons = document.querySelectorAll("#buttons-con > div > button");
let display = [];
let operator = null;
let isOperating = false;
let disableD = false;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.dataset.key;
        displayProcessing(value);
    });
});
    
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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

function getValues(display){
    operatorIndex = display.indexOf(operator)
    numOne = Number(display.slice(0, operatorIndex).join(""));
    numTwo = Number(display.slice(operatorIndex + 1, display.length).join(""));
    display = operate(operator, numOne, numTwo);
    return [display];
}

function ifDecimal(array) {
    return array.includes(".");
}

function displayProcessing(value) {
    let displayValue
    // if input 0 and larger than 0
    if (Number(display[0]) === 0 && Number(value) > 0 && !ifDecimal(display)) {
        display = [value];
    } 

    else if (!isNaN(value) && Number(value) > 0 || Number(value) === 0 && ifDecimal(display) || value === ".") {
        if (value === "." && disableDecimal(disableD)) {
            value = "";
        }
        else if (value === "."){
            disableD = true;
        }
        display.push(value);
    }

    else if (value === "clear") {
        display.pop();
        if (display.length == 0) {
            display = ["0"];
        }
    }

    else if (value === "clearall") {
        disableD = false;
        isOperating = false;
        display = ["0"];
    }

    else if (value === "=" && isOperating || isOperating) {
        display = getValues(display);

        if (isOperating && value !== "=") {
            getOperator(value)
            display.push(operator);
            isOperating = true;
        }
        else {
            isOperating = false;
        }
    }

    else if (getOperator(value)){
        disableD = false;
        isOperating = true;
        display.push(value);
    }

    else {
        display = ["0"];
    }

    displayValue = display;
    displayResults(displayValue);
    
}

function displayResults() {
    const result = document.querySelector("#result");
    result.textContent = display.join("");


}
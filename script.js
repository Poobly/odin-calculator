const buttons = document.querySelectorAll("#buttons-con > div > button");
let display = [];
let isOperating = false;
let disableD = false;
let operating = false;
let calculator = {};

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
            console.log("num");
            if (display[0] == 0 && display[1] != ".") {
                display = [value];
            }
            else {
                display.push(value);
            }
            break;
        case "clear":
            console.log("clear");
            display.pop();
            break;
        case "clearall":
            console.log("clearall")
            display = [0];
            calculator = {};
            operating = false;
            break;
        case ".":
            console.log("period");
            if (!display.includes(".")) {
                display.push(value);
            }
            break;
        case getOperator(value):
            console.log("operator");
            display.push(value);
            if (operating) {
                console.log("dfs")
                calculator.opIndex = display.indexOf(getOperator(calculator.operator));
                calculator.numTwo = getNum(calculator.opIndex + 1, display.length - 1);
                display = [operate(calculator.operator, calculator.numOne, calculator.numTwo), value];
                calculator.numOne = operate(calculator.operator, calculator.numOne, calculator.numTwo);
                calculator.operator = value;
            }
            else {                
                console.log("op")
                calculator.operator = value;
                calculator.opIndex = display.indexOf(getOperator(calculator.operator));
                calculator.numOne = getNum(0, calculator.opIndex);
                operating = true;
            }
            break;
        case "=":
            console.log("equals");
            operating = false;
            console.log(calculator)
            if (calculator.numOne) {
                calculator.numTwo = getNum(calculator.opIndex + 1, display.length);
                // console.log(calculator.opIndex)
                // console.log(calculator.operator);
                // console.log(calculator.numOne);
                // console.log(calculator.numTwo);
                display = [operate(calculator.operator, calculator.numOne, calculator.numTwo)]
            }
            else if (display[0] > 0) {
                break;
            }
            else {
                display = ["0"];
            }
            break;
    }
    displayResults(display)
}

function getNum(start, end) {
    return num = display.slice(start, end).join("");
}

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
    numOne = Number(numOne);
    numTwo = Number(numTwo);
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
            value = "+";
            return value;
        case "−":       
            value = "−";
            return value;
        case "×":
            value = "×";
            return value;
        case "÷":
            value = "÷";
            return value;
    }
    return false;
}

function disableDecimal(disableD, value) {
    return disableD ? true : false;
}

function ifDecimal(array) {
    return array.includes(".");
}


function displayResults(result) {
    const resultWindow = document.querySelector("#result");
    resultWindow.textContent = result.join("");
}
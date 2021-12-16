const buttons = document.querySelectorAll("#buttons-con > div > button");
let display = [];
let operator = null;
let isOperating = false;
let disableD = false;

buttons.forEach(button => {
    button.addEventListener("mouseenter", lightenBackground);
    button.addEventListener("mouseleave", darkenBackground);
    button.addEventListener("mousedown", (e) => darkenBackground(e, 75));
    button.addEventListener("mouseup", (e) => lightenBackground(e, 75));
    button.addEventListener("click", (e) => {
        let value = e.target.dataset.key;
        displayProcessing(value);
    });
});

function darkenBackground(e, value=25) {
    let re = /\d+/g;
    let colour = getComputedStyle(e.target).getPropertyValue("background-color");
    let firstColour = Number(colour.match(re)[0]);
    let secColour = Number(colour.match(re)[1]);
    let thirdColour = Number(colour.match(re)[2]);
    firstColour -= value;
    secColour -= value;
    thirdColour -= value;
    e.target.style.backgroundColor = `rgb( ${firstColour}, ${secColour}, ${thirdColour})`;
}

function lightenBackground(e, value=25) {
    let re = /\d+/g;
    let colour = getComputedStyle(e.target).getPropertyValue("background-color");
    let firstColour = Number(colour.match(re)[0]);
    let secColour = Number(colour.match(re)[1]);
    let thirdColour = Number(colour.match(re)[2]);
    firstColour += value;
    secColour += value;
    thirdColour += value;
    e.target.style.backgroundColor = `rgb( ${firstColour}, ${secColour}, ${thirdColour})`;
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
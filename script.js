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

function operate(operator, numOne, numTwo) {
    switch(operator) {
        case "+":
            return add(numOne, numTwo);
        case "-":        
            return subtract(numOne, numTwo);
        case "x":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
    }

}
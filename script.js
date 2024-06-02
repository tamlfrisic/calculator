let operand1;
let operator;
let operand2;
let result;

const calculator = document.querySelector("calc-body");
const display = calculator.querySelector("display");
const buttons = calculator.querySelectorAll("button");

// if the button clicked is the clear button: 
// clear.addEventListener("click", () => {
//     operand1 = "";
//     operand2 = "";
//     operator = "";
//     result = "";
//     display.replaceChildren();
//     
// })

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

function percent(a) {
    return a / 100;
}

function operate(operator, operand1, operand2) {
    // but operate should only be called if the equals sign is pressed
    // should i use something similar to the event listener and target.choice + 
        // switch case as in EaS?
    if (operator == "+") {
        result = add(operand1, operand2);
    } else if (operator == "-") {
        result = subtract(operand1, operand2);
    } else if (operator == "x") {
        result = multiply(operand1, operand2);
    } else if (operator == "/") {
        result =divide(operand1, operand2);
    } else if (operator == "%") {
        result = percent(operand1);
    }
    return result;
}


// result becomes operand 1 
//     however, if the clear is pressed, it restarts


// = calculate
// CE clear entry
// AC all clear
// % percentage
// . button for floats/decimals (limit to once)

let operand1;
let operator;
let operand2;
let result;

const calculator = document.querySelector("#calc-body");
const display = calculator.querySelector("#display");
const numbers = calculator.querySelectorAll(".number"); // handle by adding to display
const funcs = calculator.querySelectorAll(".func"); // 
const operators = calculator.querySelectorAll("operate"); // make sure result becomes new op1
const buttons = calculator.querySelector(".buttons");

// console.log(numbers);

buttons.addEventListener("click", (event) => {
    let buttonClass = event.target.className;
    let buttonID = event.target.id;
    if (buttonID === "clear") {
        clear();
    }
    if (buttonID === "backspace") {
        del();
    }

    if (buttonID === "percent") {
        display.textContent = display.textContent / 100;
    }

    if (buttonID === "dot") {
        if (!display.textContent.includes(".")) {
            display.textContent += ".";
        }
    }
    if (buttonClass === "number") {
        display.textContent += event.target.innerText;
    } 
    if (buttonClass === "operate") {
        operand1 = display.textContent;
        console.log("op1: " + operand1);
        operator = event.target.innerText;
        display.textContent = operator;
        display.replaceChildren(); 
    }
    if (buttonID === "equals") {
        operand2 = display.textContent;
        console.log(`op1 = ${operand1}  op: ${operator} op2 = ${operand2}`);
        result = operate(operator, operand1, operand2);
        display.innerText = result;
        operand1 = result;
    }
    // display.appendChild(displayVal); // but this will be a string
    // get it so you can remove the #ids from the number btns
});

function clear() {
    operand1 = "";
    operand2 = "";
    operator = "";
    result = "";
    display.replaceChildren();  
}

function del() {
    let str = display.innerText.slice(0, -1);
    display.textContent = str;
}

function add(a, b) {
    a = Number(a);
    b = Number(b);
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

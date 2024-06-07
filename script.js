let operand1;
let operator;
let operand2;
let result;

const calculator = document.querySelector("#calc-body");
const display = calculator.querySelector("#display");
const buttons = calculator.querySelector(".buttons");

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
        delOperator();
        result = display.textContent / 100;
        result = round(result);
        display.innerText = result;
        operand1 = result;
    }

    if (buttonID === "dot") {
        delOperator();
        if (!display.textContent.includes(".")) {
            display.textContent += ".";
        }
    }
    if (buttonClass === "number") {
        delOperator();
        display.textContent += event.target.innerText;
    } 
    if (buttonClass === "operate") {
        operand1 = display.textContent;
        console.log("op1: " + operand1);
        operator = event.target.innerText;
        display.textContent = operator;
    }
    if (buttonID === "equals") {
        operand2 = display.textContent;
        // console.log(`op1 = ${operand1}  op: ${operator} op2 = ${operand2}`);
        result = operate(operator, operand1, operand2);
        // console.log("result: " + result);
        result = round(result);
        // console.log("rounded result: " + result);
        display.innerText = result;
        operand1 = result;
    }
});

function round() {
    if (result.toString().length > 10) {
        result = result.toFixed(5);
        return result;
    } else {
       return result;
    }
}

function clear() {
    operand1 = "";
    operand2 = "";
    operator = "";
    result = "";
    display.replaceChildren();  
}

function delOperator() {
    if ((display.textContent.includes("/")) ||
        (display.textContent.includes("x")) ||
        (display.textContent.includes("-")) ||
        (display.textContent.includes("+"))) {
            display.replaceChildren();     
    }
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
    if (b == 0) {
        window.open("https://www.youtube.com/watch?v=NKmGVE85GUU&ab_channel=Veritasium");
    } else {
    return a / b;
    }
}

function operate(operator, operand1, operand2) {
    if (operator == "+") {
        result = add(operand1, operand2);
    } else if (operator == "-") {
        result = subtract(operand1, operand2);
    } else if (operator == "x") {
        result = multiply(operand1, operand2);
    } else if (operator == "/") {
        result = divide(operand1, operand2);
    } 
    return result;
}

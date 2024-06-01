const sum = function(array) {
    return array.reduce(((acc, curr) => acc + curr), 0);
}

const difference = function(array) {
    return array.reduce(((acc, curr) => acc - curr), 0);
}

const product = function(array) {
    return array.reduce(((acc, curr) => acc * curr), 1);
}

const quotient = function(array) {
    return array.reduce(((acc, curr) => acc / curr), 1);
}

const power = function(a, b) {
    return a ** b;
}

// = calculate
// CE clear entry
// AC all clear
// sq. square root
// % percentage
// exponent (as button)
// . button for floats/decimals (limit to once)

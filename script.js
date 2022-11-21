const add = function(a, b) {
    let sum = a + b;
    return sum;
}

const subtract = function(a, b) {
    let subtractedResult = a - b;
    return subtractedResult;
}

const multiply = function(a, b) {
    let multiple = a * b;
    return multiple;
}

const divide = function(a, b) {
    let divident = a / b;
    return divident;

}

const operate = function(operation, a , b) {
    let result = operation(a,b);
    return result;
}
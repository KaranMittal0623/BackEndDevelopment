function calculate(a, b, operate) {
    return operate();
}
function multiply(a, b) {
    return a * b;
}
function sum(a, b) {
    return a + b;
}
// outputs 20
console.log(calculate(10, 2, multiply));
// outputs 12
console.log(calculate(10, 2, sum));
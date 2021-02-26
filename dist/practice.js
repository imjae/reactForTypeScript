"use strict";
function sum(x, y) {
    return x + y;
}
sum();
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('i am just saying hello world');
}

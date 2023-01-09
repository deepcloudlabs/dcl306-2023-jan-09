// 3. Functional Programming
//  i. Higher-Order Function
// ii. Pure Function
numbers = [16, 23, 42, 4, 8, 15,] // lost
console.log(numbers)
numbers.sort(function (a, b) {
    return a-b;
}) // Higher-Order Function
console.log(numbers)
numbers.sort(function (a, b) {
    return b-a;
}) // Higher-Order Function
console.log(numbers)
numbers.sort( (a, b) => a-b)
console.log(numbers)
numbers.sort( (a, b) => b-a)
console.log(numbers)

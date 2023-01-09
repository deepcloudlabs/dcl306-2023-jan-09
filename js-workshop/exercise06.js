numbers = [4, 8, 15, 16, 23, 42]
let numbers2 = [...numbers];
numbers.push(74);
numbers2.push(108);
console.log(numbers);
console.log(numbers2);
const [first,second,...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);
numbers = [16, 23, 42, 4, 8, 15]
// 1. External Loop
for (let i=0;i<numbers.length;++i){
    let number = numbers[i];
    console.log(number);
}
// 2. External Loop
for (let i in numbers){
    let number = numbers[i];
    console.log(number);
}
// 3. External Loop
for (let number of numbers){
    console.log(number);
}
// 4. Internal Loop: Functional Programming
numbers.forEach((number,i)=>console.log(number));
let sum = 0;
for (let number of numbers){
    if (number%2 === 0){
        const cubed = number ** 3;
        sum += cubed;
    }
}
console.log(sum); // 78760
sum = // functional programming -> generator function
numbers.filter( n => n%2 === 0)
    .map( u => u**3)
    .reduce( (acc,m) => acc+m, 0)
console.log(sum); // 78760

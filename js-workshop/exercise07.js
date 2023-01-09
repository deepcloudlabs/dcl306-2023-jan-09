const x = 0;
const y = 0;
const radius = 100;
const circle = {x, y, radius};
console.log(circle);
const circle2 = {...circle, x: 100}
console.log(circle2);
u = 3;
v = 5;
w = u + v; // 8
u++;
v++;
// w -> 10
console.log(w);
function fun(x=3, y=5, z=42) {
/*    x = x || 3;
    y = y || 5;
    z = z || 42;*/
    return x * y + z;
}

console.log(fun())
console.log(fun(4))
console.log(fun(4,8))
console.log(fun(4,8, 15))
console.log(fun(4,8, 15, 23))
console.log(fun(4,8, 15, 23, 42))
function fun(x, y, z) {
    if (arguments.length !== 3)
        throw "You must provide three parameters!";
    for (const arg of arguments)
        console.log(arg)
    return x * y + z;
}

// console.log(fun())
// console.log(fun(4))
// console.log(fun(4, 8))
console.log(fun(4, 8, 15))
// console.log(fun(4, 8, 15, 23))
// console.log(fun(4, 8, 15, 23, 42))
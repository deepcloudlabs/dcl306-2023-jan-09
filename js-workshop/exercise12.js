function fun() { // blocking, synchronous function
    if (Math.random() < 0.5)
        throw "ooopss!";
    return 42;
}

try {
    const result = fun();
    console.log(result)
} catch (e) {
    console.error(e);
}

function gun() { // non-blocking, asynchronous function
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5)
                reject("ooopss!");
            resolve(42);
        }, 3_000);
    })
}

console.log("before calling the gun() function...")
gun().then(result => console.log(result))
     .catch(err => console.error(err));
console.log("after calling the gun() function...")

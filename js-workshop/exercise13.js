async function run() { // non-blocking, asynchronous function
    if (Math.random() < 0.5)
        throw "ooopss!";
    return 42;
}

async function app(){
    console.log("before calling the run() function...")
    const result = await run();
    console.log(result);
    console.log("after calling the run() function...")
}

app().finally(()=>{
    console.log("Application is done.");
})
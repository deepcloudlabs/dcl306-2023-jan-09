// JS Engine: 1 Execution Thread <--- Event Queue, Callback Method -> Asynchronous/Non-blocking
//
const timerId =
setInterval(() =>  {
    let count=0;while(true) count++;
}, 1_000);
// Asynchronous function : API (Application Programming Interface) :-

const sum = (input1, input2) => input1+input2;

setTimeout(() => {
    console.log("API data...")
},2000);
// Asynchronous i.e. don't disturb codes after this

for (let idx = 0; idx < 11; idx++) {
    console.log("index", idx);
}


// try catch :-
try {
    let a = b + c;
} catch(errored) {
    console.log("error", errored);
}


// promise :-
let promise1 = new Promise((resolve, regect) => {

    setTimeout(() => {
        resolve("User data fetched");
    }, 500);

    // regect("Server error");
})

console.log(promise1);
promise1.then ((Response) => {
    console.log("response", response);
}).catch (err => {
    console.log("err", console.err);
})

console.log(sum(1, 2));
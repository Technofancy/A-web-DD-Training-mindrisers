let numbers = [1, 2, 3];

// Doubling array with for-loop;
let newNumbers = [];
for (let idx = 0; idx < numbers.length; idx++) {
    newNumbers.push(2*numbers[idx]);
}
console.log(newNumbers)


// Doubling array with forEach array-function;
let newArr = [];
numbers.forEach( (el) => {
    newArr.push(2*el);
})
console.log(newArr);

// with map
let newArray = numbers.map((n) => { return 3*n});
console.log(newArray);



// Create fake database :-
const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
let dummyDatas = nepaliNames.map ( (el, idx) => {
    return {
        name: el,
        email: `${el}${idx}@gmail.com`,
        password: `${el}$-${idx+1}`
    }
})
console.log(dummyDatas);



const wholeNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Collect even numbers with filter :-
const evenNum = wholeNumber.filter((el) => {
    return el % 2 == 0;
})
console.log(evenNum);



// Collect odd Numbers
const oddNum = wholeNumber.filter((el) => {
    return el % 2 != 0;
})
console.log(oddNum);



// falsy values :-
// false = null = undefined = 0 = NaN = "" (In some case)

// true :-
// "Hello", let array = [], 123, true,


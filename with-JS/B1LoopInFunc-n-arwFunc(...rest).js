// Function to add all numbers

function sumOld(in1, in2, ...rest) {
    console.log(rest);
    return in1 + in2;
}
sumOld(1, 2, 3, 4, 5)



function sumAll(...rest) {
    let total = 0;
    console.log("sumAll rest : ", rest)

    for (let index = 0; index < rest.length; index++) {
        total += rest[index];
    }
    return total;
}
console.log("sumAll : ", sumAll(1, 2, 3, 4, 5));

// Normal function can be used hoisting (i.e. initialiging before declaration) but not in arrow function.

// arrow function
const sum = (input1, input2, ...rest) => {
    console.log(rest);
    return input1+input2;
}

console.log("Sum is : ",sum(1, 2, 300, 4, 5))



//Sum of all numbers given with arrow functoin :-
const givenNum = (...numbers) => {
    let total = 0;
    for(let index = 0; index < numbers.length; index++) {
        total +=  numbers[index];
    }
    return total;
}

console.log("SumOfAll : ",givenNum(1, 2));
console.log("sumOfAll : ", givenNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0))



function doubleTheArray(arr) {
    let result = [];
    for (index = 0; index < arr.length; index++) {
        result.push(2 * arr[index]);
    }
    return result;
}

let newArray = doubleTheArray(arr = [2, 3, 4]);
console.log("ArrayDoublingScheme : ", newArray);
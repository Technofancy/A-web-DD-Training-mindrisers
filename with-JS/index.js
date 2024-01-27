// Logical operators
/* 
OR ||
AND &&
NOT !
*/
let student = {
    name: "Ram",
    paidStatus: true,
    hasScholarship: false,
    fulfillAttendence: true,
};

// Object destructuring
let{fulfillAttendence, hasScholarship, paidStatus} = student;

if ((paidStatus || hasScholarship) && fulfillAttendence) {
    console.log(`${student.name} can give exam.`);
} else {
    console.log(`${student.name} cannot give exam.`);
}



function sumOld(in1, in2, ...rest) {
    console.log(rest);
    return in1 + in2;
}
sumOld(1, 2, 3, 4, 5)

// arrow function
const sum = (input1, input2, ...rest) => {
    console.log(rest);
    return input1+input2;
}

console.log("Sum is : ",sum(1, 2, 300, 4, 5))

//Sum of all numbers given :-
const givenNum = (...numbers) => {
    let total = 0;
    for(let index = 0; index < numbers.length; index++) {
        total = total + numbers[index];
    }
    return total;
}

console.log("SumOfAll : ",givenNum(1, 2));
console.log("sumOfAll : ", givenNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0))
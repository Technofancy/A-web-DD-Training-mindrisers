// Declaration and Initialization :

let abhivaadan; // declaration
abhivaadan = "नमस्कार,"; // Initialization
console.log(abhivaadan, "मेरो नाम भुवन हो |");

abhivaadan = "नमो नामः," //can't redeclare but can be overwritten/re-initialization.
console.log(abhivaadan, "मेरो नाम भुवन हो |");

const PI = 3.1451; // mostly used in uppercase/capital-letters and in snake_case.
// PI = 3.1451;
// const can't be re-initialize/update/change.
console.log("The value of PI is ", PI);

let color;
console.log(color); // Outputs : undefined.

let apiData = null; // declared to initialize later on.

// dataTypes
/*
1. Premitive Data types :-
text - Strinng
number - integer/double
true/false - boolean
undefined - JS specific
null - no value till now.

2. Non-premitive Data types :-
Array
Class
*/

// Let courses = "mern", "python"; {not possible}.
let course1 = "AI";
let course2 = "ML";
let course3 = "LLM";

let courses = ["MERN", "Python", "QA"];
let upcomming_courses = [course1, course2, course3];
let all_courses = [courses, upcomming_courses]

console.log(all_courses);

let odd = [1,3,5,7,9];
let even = [2,4,"six","eight"];
console.log("Evennumbers",even);

// Research : Index in Array.

even[2] = 6;
even[3] = 8;
console.log("EvenNumberModified",even);

even.push(10);
console.log("EvenNumberAdded", even);
even.pop(10);
console.log("EvenNumberRemoved",even);

even.unshift(10);
console.log("EvenNumberAdded", even);
even.shift(10);
console.log("EvenNumberRemoved",even);
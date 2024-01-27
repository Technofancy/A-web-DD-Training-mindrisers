// Operators
/*
Assignment Operators :-
Increment (pre i.e. ++i and post i.e. i++)
Decrement (pre i.e. --j and post i.e. j--)

Arithmetic operators :-
+ Addition
- Substraction
* Multiplication
/ Division
% Modulus (Returns remainder)

Comparrision Operator
== equality operator
> greater than operator
>= greator than and equals to
< Less than
<= Less than and equals to

logical operators :-
AND
OR
NOT

*/

// Conditional statements (if else)

let isCold = false;

if (isCold) {
    console.log("Take warm clothes");
} else {
    console.log("No need of warm clothes.")
}


employee1 = {
    name: "Ram",
    role: "reception",
};

employee2 = {
    name: "Sita",
    role: "reception",
};

employee3 = {
    name: "Hari",
    role: "Manager",
};

let allowedRole = "Manager";

function allowedEmployee(employee, allowedRole) {
    if (employee.role == allowedRole) {
        console.log(`${employee.name} is allowed.`)
    }
    else {
        console.log(`${employee.name} isn't allowed.`)
    }
}

allowedEmployee(employee1, allowedRole);
allowedEmployee(employee2, allowedRole);
allowedEmployee(employee3, allowedRole);



// nested condition
let willRain = false;
let hasProbability = true;

if (willRain) {
    console.log("Take an Umbrella.");
} else {
    if (hasProbability) {
        console.log("Take an umbrella as backup.")
    } else {
        console.log("No need of an umbrella.")
    };
};

let student = {
    name: "Ram",
    paidStatus: false,
    hasSholorship: true,
}

if (student.paidStatus) {
    console.log("Ram can give exam.");
}
else if (student.hasSholorship) {
    console.log("Ram can give exam.")
} else {
    console.log("Ram can't give exam.")
};



function getMonth(month) {
    if (month == 1) {
        return "January"
    }
    else if (month==2) {
        return "February"
    }
    else if (month==3) {
        return "Mar"
    }
    else if (month==4) {
        return "Apr"
    }
    else if (month==5) {
        return "May"
    }
    else if (month==6) {
        return "Jun"
    }
    else if (month==7) {
        return "Jul"
    }
    else if (month==8) {
        return "Aug"
    }
    else if (month==9) {
        return "Sept"
    }
    else if (month==10) {
        return "Oct"
    }
    else if (month==11) {
        return "Nov"
    }
    else if (month==12) {
        return "Dec"
    } 
    else {
        if (month <= 0 || month > 12) {
            return "Please type between 1-12."
        }
        else {
            return "Invalid Input. Please type valid numbers."
        }
    }
}

console.log(getMonth(0));  
console.log(getMonth(1));
console.log(getMonth(8));
console.log(getMonth(20));
console.log(getMonth("Aug"));

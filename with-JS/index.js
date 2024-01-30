const nepaliNames = ["Sujan", "Bikram", "Surya", "Bhuwan", "Mohan"];
for (let i = 0; i < nepaliNames.length; i++) {
    const element = nepaliNames[i];
    console.log(`${element} - ${i}`);
}

const printElement = (element) => {
    console.log(element)
}

nepaliNames.forEach(printElement, );

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((element, index) => {
    console.log("Element : ", element, "Index : ", index);
})

const showPopUp = () => {
    console.log("showPopUp");
    return undefined;
}

setTimeOut(showPopUp(), 2000);

// Anonymus function
setTimeout(() => {
    console.log("Second popUp");
}, 3000);

// research  : array-function => forEach, map, filter, find
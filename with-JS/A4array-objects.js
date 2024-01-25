// Object

let myMobile = {
    brand: "Redmi",
    model: "10",
    color: "Black",
};

let frndMobile = {
    brand: "Poco",
    model: "M5",
    color: "Blue",
}

let mobiles = [myMobile, frndMobile];

console.log("allMobiles", mobiles);

// OR
let rooms = [
    {
        room: "Kitchen",
        size: "20sqft"
    },

    {
        room: "Hall",
        size: "30sqft",
    }
];

rooms[1].size = "27sqft";

console.log("allRooms", rooms);


let user1 = {
    Firstname: "Bhuwan",
    middleName: null,
    lastName: "Khatri",
    phones: [
        {
            provider: "ncell",
            num1: "9841...",
            actvDate: "2080-09-09"
        },

        {
            provider: "NTC",
            num2: "9869...",
            actvDate: "2080-09-19"
        }
    ],
    address: "Kathmandu",
}

console.log("Users", user1);

user1.phones[0].num1 = 9803807200;
user1.phones[1].num2 = 9869758674;

console.log("numUpdatedArray", user1.phones);

let todoApidata = {
    data: {
        todos: [
            {
                title: "html",
                status: "completed",
            },

            {
                title: "css",
                status: "completed",
            },

            {
                title: "JS",
                status: "completed",
            }
        ],
    },
}

todoApidata.data.todos[2].status = "pending";

console.log(todoApidata);
console.log("JS on todo :", todoApidata.data.todos[2].status);


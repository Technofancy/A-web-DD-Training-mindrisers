let count = 100;
count = 20000;

/* array
    - elements
    - indexes  // always starts with 0 
*/
// let images = ["https://ur1", "https://ur2"];
// console.log(images);
// console.log("before", images[0]);
// images[0] = "https://domain/image.png";
// images[1] = "https://domain/images-second.png";
// console.log("after", images[0]);
// console.log(images[1]);
// console.log(images);

// let course = ['mern', 'qa']
// let courseStartTime = [3, 4]
// let courseEndTime = [4, 5]
// let courseDurationMonth = [3, 2]
// let courseStatus = [true, false]

// let courseInfo= ['courses are:',course,'courses starting time are:' ,courseStartTime,'course end time are:' ,courseEndTime,'course duration are:',courseDurationMonth, 'course status are:',courseStatus]
// console.log(courseInfo)

// let Coursess = [["mern","starttime","3","endtime","4","3months",true],["js","3-5","4months",false],["python","4-5","6months",true]]
// console.log(Coursess);

let course1 = "mern";
let course1StartTime = 3;
let course1EndTime = 4;
let course1DurationInMonths = 3;
let course1Status = true;

let course2 = "qa";
let course2StartTime = 4;
let course2EndTime = 5;
let course2DurationinMonths = 2;
let course2Status = false;

/* object 
    let <objectName> = {
        <key>:<value>,
        <key>:<value>,
        <attribute>:<value>,
        <property>:<value>,
    }

    - singular variable name
    - keys are usually smallCase
    - must have comma after values

*/

let courses = ["qa", "pytho", "mern"];

let projector1 = {
  color: "white",
  price: 50000,
  brand: "viewsonic",
};

let projector2 = {
  color: "black",
  price: 50000,
  brand: "samsung",
};

let course_1 = {
  title: "mern",
  startTime: 3,
  endTime: 4,
  duration: "1 hour",
  status: true,
};
course_1.title = "mern-stack";
/* code here.. */

let course_2 = {
  startTime: 3,
  endTime: 4,
  duration: "1 hour",
  status: true,
  title: "quality asssurance",
};

courses = [course_1, course_2];
console.log(course_2);

let room1 = {
  name: "living",
  color: "green",
  size: "200sq feet",
};

let room2 = {
  name: "ktch", // change this to dining
  color: "blue",
  size: "200 sq feet",
};

console.log("before - room2 name", room2.name);
room2.name = "dining";
console.log("after - room2 name", room2.name);

// let rooms = [room1,room2];

let rooms = ["living", "kitchen", "bedroom"];

rooms = [
  {
    room: "living",
    color: "lime",
    dimensionInSqFoot: 10,
  },
  {
    room: "ktch", // change this to dining
    color: "white",
    dimensionInSqFoot: 25 ,
  },
  {
    room: "Bed",
    color: "blue",
    dimensionInSqFoot: 20,
  }
];
rooms[1].room = "Dining";
/* code here.. */
console.log("Rooms",rooms[0,2]);

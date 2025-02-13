// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);     // object

// let myCreatedDate = new Date(2025, 0, 14)   // Tue Jan 14 2025 
// let myCreatedDate = new Date(2025, 0, 14, 5, 3)   // 1/14/2025, 5:03:00 AM
// let myCreatedDate = new Date("2025-01-14")   // 1/14/2025, 12:00:00 AM
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

const myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and time is`

newDate.toLocaleString('default',{
    weekday: "long"
})
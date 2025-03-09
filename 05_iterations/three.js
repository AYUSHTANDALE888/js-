// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, Value] of map) {
    // console.log(key, ':-', Value);
}

const myObject = {
    game1: "NFS",
    game2: "spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
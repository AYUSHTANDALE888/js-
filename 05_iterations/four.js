// forin

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "py", "java", "cpp", "rb"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(map[key]);
// }
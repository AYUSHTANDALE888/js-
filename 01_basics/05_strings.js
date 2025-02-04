const name = "Ayush"
const repoCount = 60

// console.log(name + repoCount + " value");

console.log(`Hello name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ayush-at-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "    Ayush    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ayush.com/ayush%20tandale"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));

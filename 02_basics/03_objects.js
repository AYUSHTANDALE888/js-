//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ayush",
    "full name": "Ayush Tandale",
    [mySym]: "mykey1",
    age: 18,
    location: "Nashik",
    email: "ayush@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Ayush@damn.com"
// Object.freeze(JsUser)
JsUser.email = "Ayush@crazy.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User"); 
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

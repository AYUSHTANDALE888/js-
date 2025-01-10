// primitive 

// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const IsLoggedIn = false
const Outsidetemp = null 
let userEmail;

const Id = Symbol("123")
const anotherId = Symbol("123")

console.log(Id === anotherId);

const BigNumber = 2135154538458141n



// reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"];
let myObj = {
    name : "Ayush",
    age :  18,
}

const myFunction = function(){
    console.log("hello world");   
}

console.log(typeof myFunction);

// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// Arrays  =>  object
// Function  =>  function
// Object  =>  object
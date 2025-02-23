
function sayMyname(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyname()


// function addTwoNumber(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){

    // let result = number1 + number2
    // return result 
    return number1 + number2
}

const result = addTwoNumber(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Ayush"))
const user = {
    username: "Ayush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Ayush"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Ayush"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Ayush"
    console.log(this.username);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1, num2) => num1 + num2 

// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username: "Ayush"})


console.log(addTwo(3, 4))

// const myArray = [2, 3, 4, 5, 6]

// myArray.forEach()
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
const user = {
    username: "hitesh",
    LogInCount: 8,
    SignedIn: true,

    getUserDetails: function(){
        // console.log("Got User details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(this);
// console.log(user.getUserDetails());


function User(username, logInCount, IsLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.IsLoggedIn = IsLoggedIn

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("chaiaurcode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

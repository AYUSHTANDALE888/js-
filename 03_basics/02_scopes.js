// var c = 300
let a = 100
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "Ayush"
    if (username === "Ayush") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++ interesting ++++++++++++++++++++

console.log(addOne(5))

 function addOne(num){
    return num + 1
 }


 
 addTwo(5)
const addTwo = function(num){
    return num + 2
}

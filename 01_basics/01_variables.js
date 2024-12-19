const accountId = 123456
let accountEmail ="damn@gmail.com"
var accountPassword ="44444"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed
accountEmail = "dm.@dngamil.com" 
accountPassword = "425366"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
beacause of issue in block scope and functional scope
*/




console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

const accountId = 123456
let accountEmail = "tejas@gmail.com"
var accountPassword = "1542"
accountCity ="Ahmedabad"
let accountState;

// accountId = 1 // Not Allowed

accountEmail = "Raj@gmail.com"
accountPassword="2111"
accountCity = "Ambaji"

//console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
Beacause of issue in block scope and funcational scope
*/
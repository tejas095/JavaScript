// singleton -- Single Object
//Object.create
// object literals
const mySymbol = Symbol("key1")
const JsUser={
    name:"tejas",
    "full name":"Tejas Upadhyay",
    [mySymbol] : "myKey1",
    age:28,
    location:"ahmedabad",
    email:"tejas@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])

// console.log(JsUser [mySymbol]);

JsUser.email = "tejas.upadhyay@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "tejas.upadhyay@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
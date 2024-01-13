// Primitive 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
let userEmail1=undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id===anotherId);

const bigNumber = 31542255221144554n


// Referance Type( Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"tejas",
    age:28,
}

const myFunction=function(){
    console.log("Hello Wolrd");
}

// console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Stack in (Primitive)
// Heap in (Non-Primitive)

let myYoutubename = "Tejas Upadhyay"
let anotherName = myYoutubename
anotherName = "Raj Upadhyay"
// console.log(myYoutubename);
// console.log(anotherName);

let userOne ={
    email : "tejas@gmail.com",
    Mobile: 940910000
}
let userTwo = userOne

userTwo.email = "Raj@gmail.com"
console.log(userOne);
console.log(userTwo);
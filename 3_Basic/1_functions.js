

function sayMyName() {
    console.log("T");
    console.log("E");
    console.log("J");
    console.log("A");
    console.log("S");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("result:",result);


function loginUserMessage(username ="TEJ") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Tejas"));
// console.log(loginUserMessage("Raj"));


function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,5000));

const user = {
    username :"Tejas",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"tej",
    price:399
})

const myNewArray =[200,400,100,600]
function retunSecondValue(getArray){
    return getArray[1]
}
// console.log(retunSecondValue(myNewArray));
console.log(retunSecondValue([200,500,500,600]));
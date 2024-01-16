

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
console.log(loginUserMessage("Raj"));

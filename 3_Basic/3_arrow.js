const user ={
    username :"tejas",
    price:999,

    welcomeMessage: function(){
        // console.log(`${this.username}, Welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Raj"
// user.welcomeMessage()

// console.log(this);

// function chai() {
 //    let username = "tejas"
//     console.log(this.username);
// }
// chai()

const chai = ()=>{
    let username = "tejas"
    console.log(this);
}
// chai()

// const addTwo=(num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

// const addTwo=(num1,num2) =>  num1+num2
// const addTwo=(num1,num2) =>  (num1+num2)
const addTwo=(num1,num2) =>  ({username:"tejas"})

console.log(addTwo(3,4));


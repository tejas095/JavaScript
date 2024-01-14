//const tinderUser = new Object() // singleton Object
const tinderUser = {} // Non-singleton Object
tinderUser.id = "123abc"
tinderUser.name = "tejas"
tinderUser.isLoggIn=false

//console.log(tinderUser);
const regulerUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname :"tejas",
            lastname : "upadhyay"
        }
    }
}
// console.log(regulerUser.fullname.userFullname.firstname);
const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

// const obj3 = {obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"demo1@gmail.com"
    },
    {
        id:2,
        email:"demo2@gmail.com"
    },
    {
        id:3,
        email:"demo3@gmail.com"
    },
    {
        id:41,
        email:"demo4@gmail.com"
    },
    {
        id:5,
        email:"demo5@gmail.com"
    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggIn'));
console.log(tinderUser.hasOwnProperty('isLogg'));
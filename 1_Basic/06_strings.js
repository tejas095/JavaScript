const name ="tejas"
const repoCount=50

//console.log(name+repoCount+"Value"); // Old Methods
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // leatest 

const gameName = new String('Tejas-Upadhyay')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "  Tejas-Upadhyay   " 
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://tejas.com/tejas/home%20Upadhyay"
console.log(url.replace('%20','-'));
console.log(url.includes('tejas'));
console.log(url.includes('raj'));

console.log(gameName.split('-'));
console.log(gameName.anchor("demo"));

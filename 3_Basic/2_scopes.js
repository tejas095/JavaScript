
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:", a);
}


// console.log(a);
// console.log(b);

function one() {
    const username = "tejas"
    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if(true)
{
    const username = "tejas"
    if(username==="tejas")
    {
        const website ="youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++++++//
console.log(addOne(5));
function addOne(num) {
    return num + 1
}

// console.log(addTwo(5)); Not Use Upper Side in Const funcation
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
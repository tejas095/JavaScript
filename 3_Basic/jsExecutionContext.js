// Javascript Execution Context
//{} -> Global Execution Context
//   -> Function Execution Context
//   -> Eval Execution Context

//{}-> Memory Creation Phase
//  -> Execution Phase
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10, 2)

// 1. Global Execution
 //       this
 //2. Memory Phase
//   val1 -> undefined
//   val2 -> undefined
//   addNum -> defination
//   result1 -> undefined
// result2 -> undefined
//3. Execution Phase
// val1 = 10
// val2 = 5
//addNum-> 
/**
* Because JavaScript does not have the so-called strong typing (programmer attach type signature with a value)
* allows us to do with variables "whatever we can think of"
*
* A bad idea (habit) will be:
*  "dynamic change of variable type"
*
* With the "typeof" keyword, you can easily see what type of the primitive variable is
*/

// first string:
const helloWorld = 'Hello World'
console.log(helloWorld, 'is:', typeof helloWorld)

// then number:
const myLuckyNumber = 12333
console.log(myLuckyNumber, 'is:', typeof myLuckyNumber)

// then boolean:
const myFlag = true
console.log(myFlag, 'is:', typeof myFlag)

// then undefined:
let myExample;
console.log(myExample, 'is:', typeof myExample)

// # 1 Task:
// Refactor - change the above entries to the correct code
// Without changing the so-called "logic" (way of work) (that is, all console.logs stay and should show up as before)

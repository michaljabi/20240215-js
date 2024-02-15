
const x = 2;
const y = 4;

// # 1 Task:
// Show the result of adding x and y (expected: 5)
console.log(x + y);

// Special syntax for JS REPL extension
x + y; //=

// # 2 Task:
// Show the result of the power of x to 3 (or x to y) (expected: 8)
console.log(x * x * x);
// solve #2:
console.log(Math.pow(x, y))
Math.pow(x, y) //=
// solve #3:
console.log(x ** y)

//------------------------------------------------------------
const hello = 'Hello';
const almostWorld = 'Almost World';

// # 3 Task:
/*
	Show the result of adding hello + almostWorld
	So that the text "Hello World" appears on the console
	use the appropriate built-in method on the almostWorld (!) constant
*/
console.log(hello + almostWorld.substring(6))
console.log(hello + almostWorld.slice(6))


//------------------------------------------------------------
let isAnAdmin = true; // 4.2 you can change the code only in this line
console.log(isAnAdmin)
isAnAdmin = false; // 4.1 uncomment this line before start !
console.log(isAnAdmin)

// # 4 The task
// Uncomment and fix the error in the line with the code "isAnAdmin = false"
// You should see the following output on the console:
// true
// false

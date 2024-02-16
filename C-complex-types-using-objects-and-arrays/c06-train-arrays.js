// #1 Task:
// Declare a new array with the numbers 1 up to 8
// Remove the first and last value out of it
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myNumbers)

myNumbers.shift();
myNumbers.pop();

console.log(myNumbers);

// you will not want to use it that way!!! (9 is not an element of Array, it respresents legth here)
// const myNumbersConstucted = new Array(9);
// console.log(myNumbersConstucted)
// console.log(myNumbersConstucted.length)

// #2 Task:
// Show on the console "one above the other" the result of multiplying the fields of this array by 3
for (const num of myNumbers) {
    console.log(num * 3);
}

for (let x = 0; x < myNumbers.length; x++) {
	console.log(myNumbers[x] * 3);
    // Mutating operations:
    // myNumbers[x] = myNumbers[x] * 3;
    // myNumbers[x] *= 3;
}

console.log(myNumbers);

// #3 Task:
// Check the documentation for the "indexOf" method for arrays. How to use it? Show an example of use
myNumbers.indexOf(200); //=

myNumbers.indexOf(6); //=
myNumbers.indexOf(2); //=

// #4 Task:
// Show the 1st and last element of the array on the console (one below the other)
console.log(myNumbers[0])
console.log(myNumbers[myNumbers.length - 1])

// flattening N dimentional array
console.log([[[[[[1]]]]],[3]].flat(Infinity))
// .flat without passed argument will flatten only 1 dimention
console.log([[[1]],3].flat())
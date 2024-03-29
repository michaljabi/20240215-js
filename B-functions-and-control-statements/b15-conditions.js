/**
 * When it comes to conditional statements, we distinguish:
 *
 *   if ()
 *   else if ()
 *   else
 *
 *   switch
 *
 *   ternary operator
 *
 *   we can also use logical operators
 *
 *
 * Caution:
 * In JavaScript, we have to be careful with comparisons.
 * You must use the === comparison sign
 *
 * look
 * https://dorey.github.io/JavaScript-Equality-Table/
 * */


/*
		The if...else if
*/
let numericCondition = -1;

if(numericCondition === 1) {
	console.log('if !')
} else if (numericCondition){
	console.log('else if !')
} else {
	console.log('else !?')
}

/*
		The ternary operator
*/
const x = 10;
const higherThen10 = x > 10;
const hello = x > 10 ? 'hello' : 'goodbye';


console.log(hello)
/*
		Switch
*/
sayHello(hello);

function sayHello(word) {
	switch(word) {
		case 'hello':
			console.log('logic for hello...');
			break;
		case 'goodbye john':
		case 'goodbye':
			return console.log('logic for goodbye...');
		default:
			console.log('logic for unknown value')
	}
}


// #1 Task
// Find out what value hello will have if you change x to be less than 10
// Why is this happening?

// #2 Prepare your own console.log which will write "take a" and "coat" or "t-shirt"
// depending on the weather variable which can take the values "windy" and "sunny"
// use the ternary operator


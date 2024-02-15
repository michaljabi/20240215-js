/**
* JSON = JavaScript Object Notation
*
* A JavaScript way that allows you to store it in text form (string).
* Its wide use can be seen in client-server communication using AJAX.
* Where the data from the server to the client is sent in this form.
*
* Additionally, it is used as write layer in some NoSQL databases and can be saved
* as a record field in the database (e.g. json / jsonb format in PostgreSQL)
*
*/

// JSON example:

const myJSON = `{
	"name": "Michel",
	"lastName": "Kowalski",
	"age": 22
}`

// Note that each of the keys - must be "wrapped" in quotation marks - "...."
// No "alternative" - these characters cannot be changed, e.g. to - '...'
// which in the case of pure JS - is possible for strings.

// Besides, string is wrapped in double quotes, boolean and number must not.
// All of this gives some flexibility to store data as text, for example:

const myJSONString = '{"name":"Michel","lastName":"Kowalski","age":22}';

// NOTE:
// You cannot store classes, functions, methods, Symbols and bigint - in the JSON format!


// The above myJSONString can be parsed later - as a classic JavaScript object with fields and values.


console.log(myJSONString.lastName) // this won't work - because myJSONString is just a string.

// However, after parsing to JS:
console.log(JSON.parse(myJSONString).lastName)
console.log(JSON.parse(myJSONString))

/**
 * Data from JSON can be easily converted to native JavaScript and vice versa, a JS object can be easily changed to JSON
 *
 * BUT NOTE:
 * It is not "lossless"! Some items can't be converted - and some items change.
 *
 * Here we will test the serialization and deserialization behavior to JSON (convert to JSON and back)
* */

const superObject = {
	name: 'Michel',
	age: 56,
	isAMember: true,
	birth: new Date(1963, 10, 1),
	shoutHello() {
			console.log('Hello !')
	}
}

// serialization do JSON:
const jsonData = JSON.stringify(superObject);


// deserialization:
// const myReturnedObject = JSON.parse(jsonData)

// #1 Task:
// Display the data after serialization to JSON - see what happened to the data

// #2 Task:
// Now restore the data with JSON.parse - what happened to the data? In what format are they?



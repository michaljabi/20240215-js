
const fruits = ['cherry', 'apple', 'banana'];
const name = 'Fruit shop'

function greetings() {
	return 'welcome!'
}

/* #1 Task:
	Create a shop object
	which will have the fields: fruits name greetings
	they are to have the same values as the things declared above
*/

// #2 Task: 😉😉
// show "banana welcome!" on the console using data from the object
const shop = {
	// fruits: ['cherry', 'apple', 'banana'],
	// fruits: fruits,
	fruits, // shothand for this above
	sayWelcome() {
		return `${this.fruits[2]} welcome!`
	}
}

console.log(shop)

shop.sayWelcome() //=

// #3 Task:
// create 2 concurrentShop object which will be a clone of the previous one (declare with the same values)
// additionally it will also have a banner method - which will return "here prices are the lowest!"

// #4 Tasks:😉😉
// Show all field names of shop object on the console

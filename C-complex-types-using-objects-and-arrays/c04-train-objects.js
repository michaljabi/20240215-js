/* # 1 Task:
Define and assign a shoppingCartItem object with the fields:
	name (type: string)
price (type: number)
tax (type: number)

come up with sample values yourself
*/

const shoppingCartItem = {
	name: 'Computer',
	price: 1000,
	tax: 123
}

/* # 2 Task:
Define and assign a shoppingCartItem2 object with the fields:
	name (type: string)
price (type: number)
tax (type: number)

come up with sample values yourself

Show in console.log the sums of prices (price) and taxes (tax) of both products as the value of the basket
*/

const shoppingCartItem2 = {
	name: 'book',
	price: 100,
	tax: 8
}


const basketValue = shoppingCartItem.price + shoppingCartItem.tax + shoppingCartItem2.price + shoppingCartItem2.tax;

console.log(basketValue);

// # 3 Show that initializing two new empty objects after comparing === will give us false.
// Even when they got the same properties and values (!!!)
// Explain why this is happening?
console.log(shoppingCartItem2 === shoppingCartItem)
console.log({} === {})


// Why functional approach with JS is so important?
class ShoppingCartItem {
	constructor(name, price, tax) {
		this.name = name;
		this.price = price;
		this.tax = tax;
	}
}

const myItem1 = new ShoppingCartItem('Sample', 200, 12);
const myItem2 = new ShoppingCartItem('Sample2', 220, 22);

console.log(myItem1)
console.log(myItem2)
console.log(myItem1 === myItem2)

// The same might be achieved with function with less code,

function makeShoppingCartItem(name, price = 100, tax = 23) {
	return { 
		name, 
		price, 
		tax 
	}
}

const myItem3 = makeShoppingCartItem('Sample3', 200, 12);
const myItem4 = makeShoppingCartItem('Sample4', 220, 22);

console.log(myItem3)
console.log(myItem4)
console.log(myItem3 === myItem4)

const arrayOfObj = [
	makeShoppingCartItem('ASample1', 200, 12),
	makeShoppingCartItem('ASample2', 200, 12),
	makeShoppingCartItem('ASample3', 200, 12),
	makeShoppingCartItem('ASample4', 200, 12)
]

console.log(arrayOfObj)


arrayOfObj.push(makeShoppingCartItem('ASample5', 200, 12))
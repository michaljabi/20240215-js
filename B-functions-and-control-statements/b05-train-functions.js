// #1 Task TO START the DAY:

// Write a function that will display the following text on the screen: 'Hello Stranger'
// called without an argument
// when called with the argument 'Michael' will display the text: 'Hello Michael'
// Consider the correct names for the function and its parameter

function sayHello(name = 'Stranger') {
    console.log('Hello', name)
    console.log('Hello ' + name)
    // console.log("Hello " + name)
    // After 2015:
    console.log(`Hello ${name}`) // string templates (interpolation / formatting)
    /*
    console.log(`
    
    
    multiline string.

    here

    in code...
    
    
    `)
    */
}

sayHello('Michael')
sayHello()

// before 2015:
function sayHelloNoDefault(name) {
    // This is STILL to complicated !
    // You need to go back here - after b15, b16 and b17 and REFACTOR.
    // also adress the name == null problem.
    // DONE IT!.
    console.log(name);
    if (!name  && name !== 0 ) {
        console.log('Hello Stranger')
    } else {
        console.log('Hello', name)
    }
}

console.log(!undefined)
console.log(!true)
console.log(!false)

sayHelloNoDefault();
sayHelloNoDefault(undefined); // same as above (so dot do this)
sayHelloNoDefault(null);

// Antoher feature:
sayHelloNoDefault('');

// Sometimes programmer might need the 0 number ( && name !== 0 )
sayHelloNoDefault(0);
// sayHelloNoDefault('Monica');
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
    if (name === undefined) {
        console.log('Hello Stranger')
    } else {
        console.log('Hello', name)
    }
}

// Refer to in future:
console.log(!undefined)

sayHelloNoDefault();
sayHelloNoDefault('Monica');
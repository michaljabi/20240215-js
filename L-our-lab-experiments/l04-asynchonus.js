setTimeout(() => {
    console.log('Say hello')
}, 4000)


function fireMeAfter2sec() {
    console.log('Hello 2sec')
}

setTimeout(fireMeAfter2sec, 2000)

console.log('!')

// Order of async (proff than not every command is asnyc)

setTimeout(() => {
    console.log('first')
}, 0)

console.log('second')

// Event loop in JS.

// 3 things are async in Javascript:
// level 1 - callback
// level 2 - Promises -> asnyc / await 
// level 3 - streams 

console.log(Promise)
console.log(Date);
console.log(new Date());
// console.log(new setTimeout());

// PascalCase
// camelCas
// snake_case

// kabab-case

function makeHello() {
    return 'hello'
}

console.log(makeHello());

async function makeHelloPromise() {
    return 'hello'
}

console.log(makeHelloPromise());


function makeHelloPromiseBefore2017() {
    return Promise.resolve('hello');
}

console.log(makeHelloPromiseBefore2017());
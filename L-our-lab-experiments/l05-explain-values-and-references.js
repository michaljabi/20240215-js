// Primitives: (SIMPLEST)

console.log(1 == 1);
console.log(1 === 1);


console.log('' === '');


// Why === ?
console.log(1 == '1');
console.log(1 === '1');


// gotchas:
console.log(null == null);
console.log(null == undefined);


// never happen if you use ===
console.log(null === null);
console.log(null === undefined);

// OK, what about complex types:
console.log(({}) === ({}));
console.log(({}) == ({}));


// When you have 2 refences to the same object:
const a = {};
const b = a;

console.log(a === b);

b.name = 'example';

console.log(a);
// How to deal with a NaN:
// old way:
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN(null));

// New way:
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(undefined))
console.log(Number.isNaN(null))


// indexOf problem:
const myEmptyObjects = [{}, {}, {}];

myEmptyObjects.indexOf({}); //=


// In order to work we need reference:
const obj = {};

const myOtherObjects = [{}, {}, {}, obj, {}];

//delete myOtherObjects[3];

myOtherObjects.indexOf(obj) //=
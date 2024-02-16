

function addProfession(user, professionName = 'programmer') {
    user.profession = professionName;
    return user;
}

const myUser = {
    name: 'Michal'
}

const resultUser = addProfession(myUser, 'firefighter');


console.log(resultUser);

console.log(myUser);


// This will not cause "mutation" of the base object
function addProfessionPure(user, professionName = 'programmer') {
    const shallowCopiedUser = { ...user };
    shallowCopiedUser.profession = professionName;
    return shallowCopiedUser;
}

const myOtherUser = {
    name: 'Michal'
}

const resultOtherUser = addProfessionPure(myOtherUser, 'firefighter');

console.log(resultOtherUser);

console.log(myOtherUser);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 
const sprededUser = {
    ...myOtherUser
}

console.log(sprededUser);
console.log(sprededUser === myOtherUser);

// Arrays:

const array1 = [1, 2, 3];
const array2 = [3, 4]

const combined = [array1, array2];

console.log(combined)

const reallyCombinedInOneDimention = [...array1, ...array2];

console.log(reallyCombinedInOneDimention)

// Functions

function showNumbers(a, b, c) {
    console.log(a, b, c)
}

showNumbers(...array2)
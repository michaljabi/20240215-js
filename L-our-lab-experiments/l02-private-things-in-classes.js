class User {
    name = 'Mike'
    // private field:
    #lastName = 'Kowalsky'

    sayHello() {
        console.log('My name is', this.name + ' ' + this.#lastName);
    }
}

const myUser = new User()

myUser.name = 'Adam';

console.log(myUser);

myUser.sayHello();
// console.log(myUser.#lastName);
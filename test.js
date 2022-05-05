function User() {

    this.name = 'julio';
    this.lastname = 'Rodriguez';
    this.sayHello = name => console.log('hello world')

}

class User2 {

    constructor() {
        this.lastname = 'Rodriguez'
    }

    sayHello(name) {
        this.name = name;
        console.log('hello world')
    }
}

const user1 = new User();
const user2 = new User2();

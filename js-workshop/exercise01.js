// 1. Object-Based Programming
const unitCircle = {
    x: 0,
    y: 0,
    radius: 1
};
// 2. Object-Oriented Programming
const Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
}

const c1 = new Circle(1, 2, 3, "Red");
console.log(`Area is ${c1.area()}.`);

class Employee {
    constructor(identity, fullname, salary, iban) {
        this.identity = identity;
        this.fullname = fullname;
        this.salary = salary;
        this.iban = iban;
    }

    sayHello() {
        console.log(`Hello, ${this.fullname}!`);
    }
}

class Employee12 {
    #_identity;
    #_fullname;
    #_salary;
    #_iban;

    constructor(identity, fullname, salary, iban) {
        this.#_identity = identity;
        this.#_fullname = fullname;
        this.#_salary = salary;
        this.#_iban = iban;
        //this.sayHello = this.sayHello.bind(this);
    }

    get salary() {
        console.log("get salary()")
        return this.#_salary;
    }

    get fullname() {
        console.log("get fullname()")
        return this.#_fullname;
    }

    set salary(amount) {
        console.log("set salary(amount)")
        if (amount < 8500)
            throw "cannot be set to minimum wage!";
        return this.#_salary;
    }

    sayHello = () => {
        console.log(this);
        console.log(`Hello, ${this.fullname}!`);
    }
}

const jack = new Employee12("11111111110", "jack bauer", 100_000, "tr1");
// jack.salary = 5_000;
// console.log(jack.salary)
jack.sayHello(); // sayHello(jack)
//jack.sayHello = jack.sayHello.bind(jack);
setInterval(jack.sayHello , 3_000);
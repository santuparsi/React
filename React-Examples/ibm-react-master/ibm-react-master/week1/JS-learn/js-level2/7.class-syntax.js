


// Es5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }

// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

//----------------------------------------

// Es6

class Person{

    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log('Person:constructor()');
    }

    sayName() {
        console.log('im '+this.name);
    }

    sayAge() {
        console.log('im '+this.age);
    }

}

// var p = new Person('Nag',32);

class Employee extends Person{

    constructor(name, age, skill,salary) {
        super();
        this.skill = skill;
        this.salary = salary;
        console.log('Employee:constructor()');
    }    


    saySkill() {
        console.log('i know '+this.skill);
    }

    getBonus() {
        return this.salary * 0.02;
    }

}


// var emp = new Employee('Nag',32,'.js',1000);

class Boss extends Employee{

    getBonus() {
        return this.salary * 0.2 + super.getBonus();
    }

}

var boss = new Boss('Murgaih', 32, '.js', 1000);


//---------------------------------------------


class Laptop{

    constructor() {
        console.log('Laptop instance created...');
        Laptop.totalCount++;
    }    

    static staMethod() {
        console.log("static method...");
    }

}

Laptop.totalCount = 0; // sattic var

var a = new Laptop();
var b = new Laptop();



console.log(Laptop.totalCount);
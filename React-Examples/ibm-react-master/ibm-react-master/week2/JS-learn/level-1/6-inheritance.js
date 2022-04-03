    
    
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // Person.prototype.sayName = function () {
    //     console.log('im ' + this.name);
    // }
    // Person.prototype.sayAge = function () {
    //     console.log('im ' + this.age + "old");
    // }


    // var p1 = new Person('Nag', 32);
    // var p2 = new Person('Ria', 2);



    // function Employee(name, age, salary) {
    //     Person.call(this,name,age);
    //     this.salary = salary;
    // }
    // Employee.prototype = new Person();
    // Employee.prototype.saySalary = function () {
    //     console.log('im getting '+this.salary);
    // }


    // var e = new Employee('Nag', 32, 1000.00);


//-------------------------------------------------


    // ES - classes




class Person{
    
    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor()');
    }
    sayName() {
        console.log('im '+this.name);
    }

    sayAge() {
        console.log('im '+this.age +"old");
    }

}

// var p1 = new Person('Nag', 32);

//-------------------------------------------------


class Employee extends Person{
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::constructor()');
    }
    saySalary() {
        console.log('im owe '+this.salary);
    }
    askForRaise() {
        return this.salary * 0.02;
    }
}


var e = new Employee('Nag', 32, 1000.00);

//-------------------------------------------------


class Boss extends Employee{

    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }

}

var b = new Boss('Murgaih', 25, 1000.00);

//-------------------------------------------------

class Abc{
    static staMethod() {
        console.log('sta method...');
    }
}
Abc.staVar = 1; // static variable
Abc.staMethod();

//-------------------------------------------------
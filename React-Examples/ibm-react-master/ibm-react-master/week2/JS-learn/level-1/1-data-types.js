
//-------------------------------------
// .js ==> data-types
//-------------------------------------

// 1. primitive types

    // a. string
    var name = "Nag";
    var selection = 'A';

    // b. number
    var count = 12;
    var cost = 12.12;

    // c. boolean
    var b = true; // false

    // d. undefined
    var v;

//-------------------------------------

// 2. reference types  ==> objects

    /*
        how to create objects ?

        var ref=new Constructor();
    */

    var person = new Object();
    person.name = "Nag";
    person.age = 11;
    person.doWork = function () { 
        console.log('working...');
    }
    delete person.name;
    console.log(person.name);

//-------------------------------------------------------

// literal-style objects

    // 1. Object

    var person = new Object(); // obj-wrapper
    person.name = "Nag";
    person.age = 32;
    person.doWork = function () { }

    // or

    var person = {
        name: 'Nag',
        age: 32,
        doWork: function () {
            //..
        }
    };

//-------------------------------------------------------

    // 2. Array

    var arr = new Array();
    arr.push('biryani');
    arr.push('dosa');


    // or

    var arr = ["biryani", "dosa"];
    
//-------------------------------------------------------

    // 3. RegExp

    var ssn = new RegExp("\\d{3}-\\d{2}-\\d{4}");

    // or

    var ssn = /\d{3}-\d{2}-\d{4}/;

//-------------------------------------------------------
    
    // 4. Function


    var add = new Function("a", "b", "var r=a+b;return r");
    
    // or

    // function add(a, b) {
    //     var r = a + b; return r;
    // }

    // add.prop = 12;
    // add.prop2 = 13;
    // add.method = function () {
    //     //...
    // }

    // add(12,12);
    // add.method();

//-------------------------------------------------------


// How to access obj's properties ?

/*

    obj's properties can be accessed in 2 ways

    for valid identified ==> .
    for invalid/variable identifier ==> []


*/

var person = {
    name: 'Nag',
    "full-name":"Nag N"
};

console.log(person.name);
console.log(person['full-name']);

var v = "name";
console.log(person[v]);


console.log(undefined - "");
console.log(person.full-name);


//-------------------------------------
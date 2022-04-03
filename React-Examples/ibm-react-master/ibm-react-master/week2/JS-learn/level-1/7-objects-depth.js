"use strict";

// var person = {
//     name: 'Nag',
//     age: 32
// };


// // .js objects are extensible,configurableenumurable,writable

// person.address = "BLR";

// delete person.age;

// person.name = "";

// for (var prop in person) {
//     console.log(prop);
// }


//------------------------------------------

// var person = {
//     name: 'Nag',
//     age: 32
// };

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     configurable: false,
//     writable: false
// });


// for (var prop in person) {
//     console.log(prop);
// }
// console.log(person.name);
// delete person.name;
// person.name = "New Nag";

// Object.preventExtensions(person);
// Object.seal(person); 
// Object.freeze(person); 


//------------------------------------------


// acessor properties



var person = {
    _name: 'Nag',
    set name(newName) {
        if (newName) {
            this._name = newName;
        }
    },
    get name() {
        return this._name;
    }

};

//------------------------------------------

// to know property existence

// var person = {
//     name: 'Nag',
//     age: 32
// };


// console.log("name" in person);


//------------------------------------------

// Quiz


var person = {
    _name:'Nag',
    get name() {
        return this._name;
    }
};

// person.name = "Murgaih";

console.log(person.name);
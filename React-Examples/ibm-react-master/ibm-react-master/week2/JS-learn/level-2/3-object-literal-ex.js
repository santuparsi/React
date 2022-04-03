


// var myName = "Nag";
// var age = 32;


// // es5
// // var person = {
// //     name: name,
// //     age:age
// // };

// //es6
// var person = {
//     name:myName,
//     age
// }


//-------------------------------------


// var person = {
//     name: "Nag",
//     sayName: function () { 
//         //...
//     }
// };

// or

// var person = {
//     name: "Nag",
//     sayName() { 
//         //...
//     }
// };

//-------------------------------------

// dynaimc property-names

var dynamicField = "name";


var person = {
    ["ibm-" + dynamicField]: 'Nag',
    ['say' + dynamicField]() {
        console.log('im '+this["ibm-" + dynamicField]);
    },
    "say age"() {
        console.log('..');
    }
};

console.log(person["ibm-" + dynamicField]);
person['say' + dynamicField]();

person['say age']();

//--------------------------------------------
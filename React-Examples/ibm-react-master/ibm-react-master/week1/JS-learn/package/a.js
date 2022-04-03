// var o = {
//     doWork: function () {
//         console.log('A work..');
//     }
// };


//------------------------------------------

// a. self-executable function

// var app = app || {};

// (function () {

//     app.b.doWork();

//     var o = {
//         doWork: function () {
//             console.log('A work..');
//         }
//     };

//     app.a = o; // export


// })();

//------------------------------------------


// AMD module

// define('package/a', [], function () {

//     var o = {
//         doWork: function () {
//             console.log('A work..');
//         }
//     };

//     return o;    

// });

//------------------------------------------

// common JS

// console.log('in a.js');

// var en = require('./b');
// var es = require('./c');

// function greet(lang) {
//     if (lang === 'en') {
//         en();
//         return;
//     }
//     if (lang === 'es') {
//         es();
//         return;
//     }

//     console.log('Hello maga..');

// }

// // greet();

// module.exports = {
//     greet: greet
// };


//----------------------------------------------

// Es6 module



// export var name = "Nag";
// export var age = 32;

//--------------------------


// var name = "Nag";
// var age = 32;
// export { name, age };

//--------------------------

// var person = {
//     name: "Nag",
//     age:32
// };

// export { person };

//--------------------------



class MainComponent{

}

class Comp1{

}
class Comp2{

}

export default MainComponent;
export { Comp1, Comp2 };
    


    

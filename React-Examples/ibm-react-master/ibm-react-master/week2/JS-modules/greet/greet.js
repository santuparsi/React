// var o = {
//     doWork: function () {
//         console.log('A-Work');
//     }
// }


//-----------------------------------------------------

// soln-1:  using self-executable function

// var ibm = ibm || {};

// (function () {

//     ibm.b.doWork();
//     ibm.c.doWork();

//     var i = 100;    
//     var o = {
//         doWork: function () {
//             console.log('A-Work');
//         }
//     }

//     ibm.a = o; // export

// })();


//-----------------------------------------------------

var en = require('./en');
var es = require('./es');
function greet(lang) {
    if (lang === "en") {
        en();
        return;
    }
    if (lang === "es") {
        es();
        return;
    }
    console.log("hello maga");
}
function sayName() {
    console.log('im greet-module');
}
// module.exports.sayHello = sayHello;
// module.exports.sayName = sayName;
// or
module.exports = {
    greet,
    sayName
};


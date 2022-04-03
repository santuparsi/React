

// var o = {
//     doWork: function () {
//         console.log('C-work..');
//     }
// };

//-----------------------------------------------------

// soln-1:  using self-executable function

// var ibm = ibm || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('C-Work');
//         }
//     }

//     ibm.c = o;

// })();


//-----------------------------------------------------

function greet() {
    console.log('Ola...');
}

module.exports = greet;
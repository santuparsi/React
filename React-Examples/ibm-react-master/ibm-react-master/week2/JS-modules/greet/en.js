

// var o = {
//     doWork: function () {
//         console.log('B-work..');
//     }
// };

//-----------------------------------------------------

// soln-1:  using self-executable function

// var ibm = ibm || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('B-Work');
//         }
//     }

//     ibm.b = o;

// })();

//-----------------------------------------------------


function greet() {
    console.log('Hello...');
}

module.exports = greet;
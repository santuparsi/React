"use strict";

/*

    we can create func in 2 ways

    1. function definition
    2. function expression
    

*/

//-----------------------------------------------

// 1. function definition

/*
     imp-note : always get hoisted with func-obj
*/

// console.log(add(12,13));

// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12, 13));

//----------------------------------------------------------------

// 2. function expression

/*
     imp-note : will not get hoisted with func-obj, shud call after expression
*/

// console.log(add(12, 13)); // can invoke
// var add = function sum(n1, n2) { return n1 + n2; };
// console.log(add(12, 13));

// sum();

//----------------------------------------------------------------


// function as values

// function sayHello() {
//     console.log('Hello');
// }

// var sayHi = sayHello;

// sayHello();
// sayHi();

//----------------------------------------------------------------

// function as args

// var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// //nums.sort();  // always compare array elements as string(s)
// nums.sort(function (a, b) { return a - b;});


// console.log(nums);

//----------------------------------------------------------------

// function  as return

// function teach() {
//     //..
//     console.log('teaching....');

//     var learn = function () { console.log('learning...')}

//     return learn;    
// }

// var learnFunc = teach();
// learnFunc();
// learnFunc();


//----------------------------------------------------------------


// function f1() {
//     console.log('f1() called...');
//     console.dir(arguments[0]);
// }

// f1(1,2,3,4,5,6,7,8,9,10);

//----------------------------------------------------------------

// Es6

// a.default function params


function func(a=1, b=2) {

    // if (!a) {
    //     a = 1;
    // }
    // if (!b) {
    //     b = 2;
    // }

    // or

    // a = a || 1;
    // b = b || 2;


    console.log(a);
    console.log(b);
}

// func(undefined, 20);

//----------------------------------------------------------------


// Rest operator


// function searchProducts(id,...category) {
//     console.log(id);
//     console.log(category);
//     console.log(arguments);
// }

// searchProducts(1000, 'hw', 'sw', 'other');

//----------------------------------------------------------------


// Quiz

// let k;
// function f() {
//      var k = 12;
// }
// f();

console.log(k);



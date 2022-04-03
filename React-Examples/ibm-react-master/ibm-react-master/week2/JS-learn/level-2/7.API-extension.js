

// var x = {
//     a:1
// };
// var y = {
//     b:2
// };

// Object.setPrototypeOf(y,x);

// console.log(y.a);

//---------------------------------------

var x = { a: 1 };
var y = { b: 2 };
var z = { b: 3,c:4 };

// Object.assign(y, x);

//---------------------------------------------

// var target = {};
// Object.assign(target, x, y);

// or

// var target = Object.assign({}, x, y, z);

//---------------------------------------------

// Inherited properties will not be assigned

// Object.setPrototypeOf(y, z);
// var newO = Object.assign({}, x, y);
// console.log(newO);

//---------------------------------------------

// non-enumurable properties will not be assigned

// Object.defineProperty(x, 'a', { enumerable: false });
// var newO = Object.assign({}, x, y);

//------------------------------------------------

// var amount = NaN;
// var total = NaN;

// // console.log(total===NaN);
// console.log(Object.is(amount,total));

//------------------------------------------------


// var food = "biryani";

// console.log(food.startsWith("bi"));
// console.log(food.endsWith("bi"));
// console.log(food.includes("ya"));



// var surfer = '\u{1f30a}\u{1f3c4}\u{1f40b}';
// console.log(surfer.repeat(3));


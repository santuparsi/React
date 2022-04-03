// array-util

//----------------------------------------------------------------

// _.compact()

// let arr = [1, 2, false, "", null, "hello", undefined, "biryani"];
// let newArray = _.compact(arr);

//----------------------------------------------------------------

// _.chunk()


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = _.chunk(arr,5);

//----------------------------------------------------------------

// _.concat()

// var arr1 = [1];
// var arr2 = [2];

// var newArray = _.concat(arr1, arr2, "biryani", [3, 4], [[5, 6]]);


//----------------------------------------------------------------



// _.difference()


// var arr1 = [1, 2];
// var arr2 = [2, 2, 3, 4, 5];

// var newArray = _.difference(arr1, arr2);

//----------------------------------------------------------------

// _.differenceBy


// var newArray = _.differenceBy([2.1, 1.2], [2.3, 3.1], function (num) { 
//     return Math.floor(num);
// });

// or

// var newArray = _.differenceBy([2.1, 1.2], [2.3, 3.1],Math.floor);


// var

//----------------------------------------------------------------


// let newArray = [2,4,8,10,12,14].filter(function (ele, idx) { 
//     if (idx%2!==0) return true;
//     else return false;
// });
// console.log(newArray);


//---------------------------------------------------------------

// [1, 2, 3, 4, 5].forEach(function (ele, idx) { 
//     console.log(ele);
// });

//-------------------------------------------------------------


// var products = [
//     { name: 'A', price: 2000 },
//     { name: 'B', price: 3000 } , 
//     { name: 'C', price: 1000 },
//     { name: 'D', price: 8000 }
// ];


// var newProducts = products.map(function (ele, idx) { 
//     if(ele.price<5000)
//     return ele.price;
// });
// console.log(newProducts);


// var total = products.reduce(function (acc, p) { 
//     return acc + p.price;
// },0);
// console.log(total);



// Quiz

// var todos = [
//     { id: 4, title: 'item-1', completed: false },
//     { id: 7, title: 'item-2', completed: false },
//     { id: 6, title: 'item-3', completed: false }
// ];

// var max = todos.reduce((maxId, todo) => {return Math.max(todo.id, maxId) }, 0);
// console.log(max);



//-------------------------------------------------------------


// _.differenceWith()


// var arr1 = [
//     { x: 1, y: 2 },
//     { x: 2, y: 1 }
// ];  

// var arr2 = [
//     { x: 1, y: 2 }
// ];  

// var newArray = _.differenceWith(arr1, arr2, function (a, b) { 
//     console.log(a);
//     console.log(b);
//     return a.x === b.x;
// });


//-------------------------------------------------------------


// var arr = [1, 2, 3, 4, 5, 6];

// // var newArray = _.drop(arr,1);
// // var newArray = _.dropRight(arr);


// var newArray = _.dropRightWhile(arr,function (n) { 
//     if (n > 3) {
//         return true;
//   }
// });

// console.log(newArray);




// var users = [
//   { 'user': 'barney',  'active': true },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': false }
// ];



// var newUsers = _.dropRightWhile(users, {active:true});
// console.log(newUsers);



//-----------------------------------------------------




// var todos = [
//     { id: 4, title: 'item-1', completed: false },
//     { id: 7, title: 'item-2', completed: false },
//     { id: 6, title: 'item-3', completed: false }
// ];


// var todoId = 7;


// let idx = _.findIndex(todos, function (todo) { 
//     return todo.id===todoId
// });






//-----------------------------------------------------

// var newArray = _.flattenDeep([1, [2, [3, [4]], 5]]);

//-----------------------------------------------------


// var names = ["a", "b", "c"];
// var s = _.join(names,",");


//----------------------------------------------------

// var arr = [1, 2, 1, 2];

// let counts = {};

// arr.forEach(function (ele,idx) { 
//     counts[ele] = 1 + counts[ele] || 1;
// });

// console.log(counts);

//---------------------------------------------------


var todos = ['item-1', 'item-2'];

var newItem = "item-3";


// var newTodos = [...todos, item3];

// or

var newTodos = _.concat(todos, newItem);

var x = { a: 1 };
var y = { b: 2 };

var z = Object.assign({}, x, y);

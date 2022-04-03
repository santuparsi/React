


//------------------------------------------------

// Model/Data  ==> Product ( id,name,price)

var p1 = { id: 234234, name: 'Laptop', price: 100 };
var p2 = { id: 674563, name: 'Mobile', price: 200 };
var p3 = { id: 645656, name: 'Other', price: 300 };

//------------------------------------------------

var products = [];
products.push(p1);
products.push(p2);
products.push(p3);

//-------------------------------------------------


// concat


// var x = [1];
// var y = [2];

// var z=x.concat(y);

// console.log(x);
// console.log(y);
// console.log(z);

//---------------------------------------


// var x = [1,2,3,4,5];
// x.copyWithin(1,3);
// console.log(x);  // [ 1, 4, 5, 4, 5 ]


//---------------------------------------


// var nums = [1, 2, 3, 4, 5, 6];

// var evenNums=nums.filter(function (elt, i) { 
//     return elt % 2 == 0;
// });

// console.log(evenNums);

// var sqNums=nums.map(function (elt, i) { 
//     return elt * elt;
// });
// console.log(sqNums);

// nums.forEach(function (elt, i) { 
//     // console.log(elt);
//     if (elt === 5) {
//         console.log(i);
//     }
// });


// var r=nums.reduce(function (a, b) { 
//     return a + b+10;
// }, 19);

// console.log(r);


var nums = [2,6];

// delete nums[0];
// nums.splice(0,2);
// console.log(nums);

// var sliceNums = nums.slice(0, 2);
// console.log(sliceNums);

var b=nums.every(function (elt) {
    return elt % 2 === 0;
});

console.log(b);


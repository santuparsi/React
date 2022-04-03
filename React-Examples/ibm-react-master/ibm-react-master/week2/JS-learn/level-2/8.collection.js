

/*

    .js-lang

      --> array ( list )

      es6

      --> set
      --> map

*/


// var list = ["item-1", "item-1"];


// Set

// var cars = new Set();
// cars.add("BMW");
// cars.add("BMW");

// console.log(cars);

//---------------------------------

// var car1 = { name: 'BMW' };
// var car2 = { name: 'AUDI' };


// var cars = new WeakSet();
// cars.add(car1);
// cars.add(car2);

// car2 = null;

// // after GC
// console.log(cars.has(car2));


//---------------------------------


var map = new Map();


var owner1 = { name: 'Nag' };
var owner2 = { name: 'Ria' };

var car1 = { name: 'BMW' };
var car2 = { name: 'AUDI' };


map.set(owner1, car1);
map.set(owner2, car2);


var car = map.get(owner2);
console.log(car);

//---------------------------------
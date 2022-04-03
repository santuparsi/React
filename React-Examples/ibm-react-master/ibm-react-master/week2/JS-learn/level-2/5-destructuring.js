


// // manual destructuring

// var person = {
//     name: 'Nag',
//     age:32
// };

// var myName = person.name;
// var myAge = person.age;

//------------------------------------------


//  destructuring

var person = {
    name: 'Nag',
    age:32
};

// var { name: myName, age: myAge } = person;


// var { name: name, age: age } = person;
// or
// var { name, age } = person;



// destructuring to existing variables

let name, age;
({ name,age } = person);




//------------------------------------------


// Array destructuring

//---------------------------------------------------------

// var salaries = [100, 200, 300];

// var min = salaries[0];
// var avg = salaries[1];
// var max = salaries[2];

// or

// var [min, avg, max] = salaries;

//---------------------------------------------------------


// var salaries = [100, 200,[400,500]];
// let [min, avg, [max1, max2]] = salaries;



//---------------------------------------------------------


// Quiz

var o = [1,2];
var [min, max] = o;



//---------------------------------------------------------















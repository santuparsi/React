


var person = { name: 'Nag' };

// es5
// var message = " The person " + person.name + " teaching .js";
//es6
var message = `The person ${person.name} teaching .js`;  // interpolated string

//es5
// var htmlTemplate = '<div>' +

//                    '</div>';


var htmlTemplate = `
    <div>
        <h1> ${person.name}</h1>
    </div>
`;


//-------------------------------------------------------



// Quiz

var name = "Nag";
var str = `The person is ${name}`;
name = "Murgaih"

console.log(str);


//-------------------------------------------------------


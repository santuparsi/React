


// es6

//------------------------------------

// var name = "Mur";
// var age = 32;

// var person = {
//     name: name,
//     age:age
// };

// var person = { name, age };


//------------------------------------


// var person = {
//     name: 'Nag',
//     sayName: function () {
//         console.log('im '+this.name);
//     }
// };

// or


// var person = {
//     name: 'Nag',
//     sayName() {
//         console.log('im '+this.name);
//     }
// };



//------------------------------------


var dynamicFiled = "name";

var person = {
    ["ibm-" + dynamicFiled]: 'Nag',
    "say Name"() {
        console.log('im '+this['ibm-'+dynamicFiled]);
    }
}
person['say Name']();

//------------------------------------------

// var v = 12;

// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     //f2(); //f2-conhtext ==> f1-context
//     var v = 13;
//     return f2;
// }

// var f2Func = f1(); // f1-context ==> global-context

// f2Func();

//-----------------------------------------------------



// var x = 12;
// let y = 13;


// function f() {
//     console.log(x);
//     console.log(this.x);

//     console.log(y);
//     console.log(this.y);
// }

// f();

//---------------------------------------

var pName = "SOME_NAME";

var person = {
    pName: 'Nag',
    sayName: function () {
        console.log('im ' + name);
        console.log('im ' + this.pName);
        console.log('im '+this.prop);
    }
};

person.sayName();

//---------------------------------------
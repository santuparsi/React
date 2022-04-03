


/*

    this
    -----

       ==> current object
       ==> owner of execution context

*/




// let name = "global"; // global-context variable

//--------------------------------------------------

// console.log(name);
// console.log(this.name);

//--------------------------------------------------

// function f() {
//     //let name = "local";
//     console.log(name);
//     console.log(this.name);
// }

// f(); // 

//---------------------------------------------------

// static function binding..

// var p = { name: 'Nag', method: f };
// p.method();

//---------------------------------------------------

// dynamic func binding

// let name = "global";

// function f(name) {
//     console.log(name);
//     console.log(this.name);
// }

// var e = { name: 'IBM' };

// // f();
// // f.call(e, 'Nag');
// // f.apply(e, ['Nag']);


// var newF = f.bind(e);
// newF("Ria");

//--------------------------------


// function F(name) {
//     this.name = name;
// }


// F();
// var newO = new F();

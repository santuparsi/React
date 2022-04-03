/*

     this ==> owner of execution-context

     imp-notes:

     --> any variable without reference in func, reads context's data


     best-practice :

     never read obj's data in function with reference-variable-name
     if it is not const variable , use 'this' keyword

      
     -------------------------------------------------------

     --> every func-invocation , creates new-context
     --> every-context must be owned one-object ( 'this' )

     ------------------------------------------------------


*/


    // let person = {
    //     name: 'Nag',
    //     sayName: function () {
    //         //console.log('im '+name); // reads context's data
    //         //console.log('im '+person.name); // reads obj's data
    //         console.log('im '+this.name); // reads obj's data
    //     }
    // };

    // let p = person;
    // person = { name: 'Murgaih' }
    // p.sayName();

//---------------------------------------------------------------

    // var p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name) } };
    // var p2 = { name: 'Murgaih', sayName: function () { console.log('im ' + this.name) } };



    // function sayNameForAll() {
    //     console.dir(this);
    //     console.log('im '+this.name);
    // }

    // // static function-binding

    // var p1 = { name: 'Nag', sayName: sayNameForAll };
    // var p2 = { name: 'Murgaih', sayName: sayNameForAll };

    // sayNameForAll();    // function-invocation ( context owned by global-obj ) ( this --> global-obj )
    // p1.sayName(); // i am Nag // method-invocation ( this --> invoker-obj )
    // p2.sayName(); // i am Muragih



    // Quiz

    // function f() {
    //     return this;
    // }

    // var o = f();
    // console.log(o.name);

    //---------------------------------------------------------------------

    // Quiz

    /*

        imp-note : all global-variables declared with 'var' keyword
                will become properties of global-obj.

    */


    // let food = "Biryani";

    // function getFood() {
    //     // console.log(drink);
    //     console.log(this.drink);
    // }

    // getFood();


//---------------------------------------------------------------------


    // class

    // ES5


    // function Person(name,age) {
    //     this.name = name;
    //     this.age = age;

    //     this.sayName = function () {
    //         console.log('im '+this.name);
    //     }
    //     this.sayAge = function () {
    //         console.log('im '+this.age+"old");
    //     }
    //     // return {};// dont return any obj from consructor
    // }

    // var p1 = new Person('Nag',32); // consructor-invocation ( this ==> new-obj)
    // var p2= new Person('Mur',25);


    //---------------------------------------------------------------------


    // call,apply and bind invocation

    // from third-party

    // var lib = {
    //     sayName: function (message,from) {
    //         console.log(message+ ' im '+this.name+" - "+from);
    //     }
    // };


    // var p = { name: 'Nag',age:32 };
    // var e = { name: 'Murgaih' };


    // dyamic func binding

    // way-1
    // lib.sayName.call(p, "Hello","CHN");
    // lib.sayName.call(e,"Hi","Universe");

    // way-2
    // lib.sayName.apply(p, ["Hello","CHN"]);
    // lib.sayName.apply(e,["Hi","Universe"]);

    // way-3

    // var murgSaNameFunc = lib.sayName.bind(e);
    // murgSaNameFunc("dude", "earth");
    // murgSaNameFunc("Hi","universe");


    // var nagSayNameFunc = lib.sayName.bind(p, "Hello", "CHN")
    // nagSayNameFunc();


//-----------------------------------------------------------------


    /*

        we can invoke func in 4 ways

        --> global-function-invocation  ( this --> global-obj )
        --> method-invocation ( this --> invoker-obj )
        --> constructor-invication ( this --> new-obj )
        --> call/apply/bind invocation ( this --> arg-obj )


    */



//-----------------------------------------------------------------


// Quiz-1

/*
    best-practice : never invoke withoout 'new' keyword
*/

// function Person(name) {
//     console.log(this);
//     this.name = name;
// }

// var p=new Person('Abc')



//-----------------------------------------------------------------


// Quiz-2.1

// var trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching... .js");
//         var self = this;
//         function doLearn() {
//             console.log(this.name+ ' learning .js from '+ self.name);
//         }
//         var emp = {name:'IBM'};
//         // doLearn();
//         doLearn.call(emp);
//     }
// };

// trainer.doTeach();

// var t = trainer;
// trainer = {name:'Murgaih'};

// t.doTeach();

//-----------------------------------------------------------------

// Quiz-2.1

function startSession() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching .js");
            var self = this;
            var doLearn = function () {
                console.log(this.name + " learning .js from " + self.name);
            }
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    var tnr = new Trainer("Nag");  // constructor-invocation
    var emp1 = new Employee("Murgaih");
    var emp2 = new Employee("Tom");
    var learnFunc = tnr.doTeach();  // method-invocation
    learnFunc.call(emp1);
}
// startSession();  // function-invocation

//-----------------------------------------------------------------

// Quiz-3



// function Person(age) {
//     this.age = age;
//     var self = this;
//     setInterval(function () {
//         self.age++;
//         console.log(self);
//      },1000) // event    

// }

// var p = new Person(0)


//-----------------------------------------------------------------

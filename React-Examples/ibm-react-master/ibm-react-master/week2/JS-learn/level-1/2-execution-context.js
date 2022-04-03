

/*

    Execution-context / scope
    -------------------------

    memory/stack-frame with args & local to execute instructions

    phase-1 : context-creation

      any variavle declared with 'var' keyword,
      will get hoisted to top with default value 'udefined'

    phase-2: context-execution
    
      instructions execute in sequence

    -----------------------------------------------------------


    imp-note:

    .js-runtime by default has one global-context ,
     which will created & executed by global-obj initialy.


     global-obj

         =>browser ==> window
         =>Node.js ==> process



    -----------------------------------------------------------     

    accessing any variable which is  not in context ,
    yields to 'Reference-Error'

    -----------------------------------------------------------     

    invoking any function , aloso creates new-context,
    which is child of in-which context that func has declared.

    -----------------------------------------------------------

    best-practice :
        always declare all variable at 'top'
        if you use 'var' keyword , to avoid hoisting confuse.
   -----------------------------------------------------------
        
*/


// var v = 12;
// console.log(v);



// var v = 12;

// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     //f2(); // f2-context ==> f1-context
//     var v = 13;
//     return f2;
// }

// var f2Func=f1(); // f1-context   ===> global-context

// f2Func(); //f2-context ==> f1-context


//-----------------------------------------------------------

// ES6

// let : keyword


/*
        'let' variables

    -->  will never get hoisted...
    -->  can't re-declare in same-context
    -->  by-default block-scoped

*/

//-----------------------------------------------------------

// -->  will never get hoisted...

// console.log(v);
// let v;

//-----------------------------------------------------------

// -->  can't re-declare on same-scope

// let v = 12;
// let v = 13;

// console.log(v);

//-----------------------------------------------------------

// -->  by-default block-scoped

// let v = 12;

// {
//     let v = 13;
//     console.log(v);
// }

// console.log(v);

//-----------------------------------------------------------

// var i = 40;
// for (let i = 0; i < 10; i++){
    
// }
// console.log(i);


//-----------------------------------------------------------


// const - keyword

/*

    ==> we can't mutate variable reference
    ==> block-scoped
    ==> will not get hoisted

*/


// const trainer = {
//     name:'Nag'
// };

// trainer = {
//     name:'Sandeep'
// }

// trainer.name = "Sandeep";



// block-scoped

// {
//     const food = "biryani";
// }

// const food = "ch-65";
// console.log(food);



//-----------------------------
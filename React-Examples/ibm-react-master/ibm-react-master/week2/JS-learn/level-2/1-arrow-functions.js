"use strict";


// var getPrice = function () {
//     return 100.00;
// }

// Arrow function - syntax

// var getPrice = () => 100.00;
// var getPrice = (count) => count*100.00;
// var getPrice = count => count*100.00;
// var getPrice = (count, tax) => (count * 100.00) + tax;
// var getPrice = (count, tax) => { var total = (count * 100.00) + tax; return total; };



// why we need arrow-function ?



var trainer = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");

        // var self = this;
        // var askQues = function (ques) {
        //     console.log(this);
        //     console.log(self.name+" anwering "+ques);
        // }

        // or

        var askQues = (ques) => {
            console.log(this.name + " anwering " + ques);
        };

        return askQues;
    }
}

// var askQues = trainer.doTeach();

// askQues("Q0");

// askQues.call(trainer, 'Q1');

// var newTrainer = {
//     name:'Ria'
// };
// askQues.call(newTrainer, 'Q2');


//-------------------------------------------------


// function teach() {
//     var notes = ".js notes";
//     function doLearn() {
//         console.log('using '+notes);
//     }
//     function doType(){

//     }
//     doType();

//     return doLearn;

// }

// var doLearn = teach();
// doLearn();

//---------------------------------------------------


// Quiz



// var invoice = {
//     num: 123,
//     process: function () {
//         console.log('processing invoice num '+this.num);
//     }
// };

// invoice.process();

//---------------------------

// var invoice = {
//     num: 123,
//     process: () => {  console.log('processing invoice num '+this.num);}
// };

// invoice.process();

//---------------------------------------------


// var invoice = {
//     num: 123,
//      process: function () {
//          return () => {  console.log('processing invoice num '+this.num);};
//     }
// };

// var f = invoice.process();
// f();
// f();
// f();
// f();

// var newInvoice = { num: 321 };
// f.call(newInvoice);

// f.bind(newInvoice)();


//------------------------------------------------------


// document.addEventListener('click', function () { 
//     console.log(this);
// });


// document.addEventListener('click', () => { console.log(this)});


// var AppComp = {
//     name:'App',
//     init: function () {
//         document.addEventListener('click',() => { console.log(this)});
//     }

// }

// AppComp.init();


//------------------------------------------------------------------




// var tnr1 = {name:'Nag'};
// var tnr2 = {name:'Ria'};

// var tnrService = {
//     doTeach: function (sub) {
//         var askQues = (ques) => {
//             console.log(this.name + ' answering ' + ques + " on " + sub);
//         };
//         return askQues;
//     }
// };

// var askJSQues = tnrService.doTeach.call(tnr1, '.js');
// var askJavaQues = tnrService.doTeach.call(tnr2, '.java');

// askJSQues("what is arrow?");
// askJavaQues("what is lambda?");



//---------------------------------------------


function getFood() {
    return
    {
        name:'Biryani'
    }
}

var food = getFood();
console.log(food.name);




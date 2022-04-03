
/*

    A closure is a function having access to the parent scope,
    even after the parent function has closed.


    why we need ?

    --> to abstract public-behav of any modules
    --> while executing async, to access parent-scoped data

*/

// function teach(sub) {
//     console.log('teaching ' + sub);
//     var notes = sub + "-notes";
//     var i = 10;
//     function learn() {
//         console.log('learning '+sub+" with "+notes);
//     }
//     console.log('teaching ends..');
//     return learn;
// }



// var learnFunc = teach('.js');
// learnFunc();

//--------------------------------------------------------------


// closure use-1


    // module -pattern ( self executable function )

    const counter=(function() {
        
        var count = 0;  // private

        // public    
        function doCount() {
            count++;
        }
        function getCount() {
            return count;
        }

        return {
            inc: doCount,
            get: getCount
        };

    })();


//----------------------------------

    // closure use-2

    function Person(age) {
        this.age = age;
        var self = this;
        setInterval(function () {
            self.age++;
            console.log(self);
        },1000) // event    

    }

    //var p = new Person(0)


//----------------------------------


// Quiz-



    // function getF(i) {
    //     return function () { return i;};
    // }

    // var arrFuncs = [];
    // for (var i = 0; i < 2; i++){
    //     arrFuncs.push(getF(i));
    // }

    // console.log(arrFuncs[0]());
    // console.log(arrFuncs[1]());


    //---------------------------------


    var arrFuncs = [];
    for (let i = 0; i < 2; i++){
        arrFuncs.push(function () { return i});
    }

    console.log(arrFuncs[0]());
    console.log(arrFuncs[1]());





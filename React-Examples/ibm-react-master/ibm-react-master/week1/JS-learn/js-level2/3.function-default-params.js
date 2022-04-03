


// es6


function f(a=1, b=2) {

    // if (!a) {
    //     a = 1;
    // }    
    // if (!b) {
    //     b = 2;
    // }

    // or

    // a = a || 1;
    // b = b || 2;

    console.log(a);
    console.log(b);
}

f(undefined,20);
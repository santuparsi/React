


// spread operator


/*
    .js iterable objects
        e.g
        Array
        String
*/

//-----------------------------------------

//var max = Math.max(12, 13, 24, 14);

var arr = [12, 13, 25, 56, 23];
// var max = Math.max(max);
//var max = Math.max(arr[0],arr[1]);  // manually spreading
// var max = Math.max(...arr); // speading

//-----------------------------------------


// var a = [1, 2, 3];
// var b = [7, 8, 9];

// var c = [...a, 4, 5, 6, ...b];

//------------------------------------------

// var name = "NAG";
// var arr = [...name];

//-----------------------------------------

function f(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

// f(1, 2, 3, 4);

var arr = [1, 2, 3, 4];

f(...arr);

//---------------------------------------------
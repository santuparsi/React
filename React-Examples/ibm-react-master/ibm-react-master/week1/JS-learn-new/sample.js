



// --------------------------------------------

console.log('Hello..');

// --------------------------------------------


function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y); // foo-context
}

console.log(bar(7)); // bar-context

// --------------------------------------------

function foo() {

}
function bar() {
    foo();
}
function baz() {
    bar();
}
baz();

// --------------------------------------------

function foo() {
    throw new Error('oops');
}
function bar() {
    foo();
}
function baz() {
    bar();
}
baz();



// --------------------------------------------

function foo() {
    foo();
}

foo();

// --------------------------------------------

function f1() {

    var i = 0;
    while (i < 10) {
        console.log('murgaih...');
        i++;
    }

}

function f2() {
    console.log('Nag..');
}

f1();
f2();

// --------------------------------------------

// 6.

/*

    <button class="boy"> button-1 </button>
    <button class="girl"> button-2 </button>

*/

console.log('hello...');

$.on('.boy', 'click', function boyHandler() {
    console.log('handling event on boy eleemnts...');
});
$.on('.girl', 'click', function girlHandler() {
    console.log('handling event on girls eleemnts...');
});

var i = 0;
while (i < 100) {
    console.log('murgaih...');
    i++;
}

//-------------------------------------------------

/*

<button id="tom"> Tom </button>

*/

$.on('#tom', 'click', function () {
    console.log('start...');
    // e.g
    setTimeout(function () {
        console.log('after timeout tom working...');
    },5000);

    console.log('end...');
});

// --------------------------------------------

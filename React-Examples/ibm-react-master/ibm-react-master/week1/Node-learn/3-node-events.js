

/*
    in Node.js

    All objects that emit events are instances of the
    EventEmitter class

*/

var EventEmitter = require("events").EventEmitter;
var util = require('util');

//------------------------------------------------

// var ee = new EventEmitter();

//------------------------------------------------

// ee.on('kick', function (data) { 
//     if (data.name === 'Nag') {
//         console.log('pls dont kick me');
//     }  
//      if (data.name === 'Murgaih') {
//         console.log('ill kick back');
//     }  
// });



// ee.emit('kick', {name:'Nag'});
// ee.emit('kick', {name:'Murgaih'});

//------------------------------------------------




// e.g  -  Node-events


// Es-5

function Door() {
}
Door.prototype.open = function () {
    console.log('door opened...');
    this.emit('open', {num:315,floor:3});
}
Door.prototype.close = function () {
    console.log('door closed...');
    this.emit('close');
}
util.inherits(Door,EventEmitter);


var door = new Door();

//-----------------------------------------

var light = {
    setUp: function () {
        door.on('open', function (event) { 
            console.log(`LIGHT >> ON , doorNum=${event.num} , floor=${event.floor}`);
        });
        door.on('close', function () { 
            console.log('LIGHT >> OFF');
        });
    }
};
light.setUp();


var AC = {
    setUp: function () {
        door.on('open', function () { 
            console.log('AC >> ON');
        });
        door.on('close', function () { 
            console.log('AC >> OFF');
        });
    }
};
AC.setUp();

//-----------------------------------------

setTimeout(function () {
    door.open();
    setTimeout(function () { 
        door.close();
    },5000);
},5000);

//-----------------------------------------





var fs = require('fs');


// 
fs.readFile('data/veg-menu.txt', function (err, data) {
    if (err) {
        console.log(err.message);
    }
    console.log(data.toString('utf8'));
});

console.log('continue to other work...');


var fs = require('fs');


// veg-menu

var vegMenu = fs.readFileSync('data/veg-menu.txt','utf8'); // open...read....
console.log(vegMenu);

console.log('continue to read non-veg-menu....');



// symbols


// var nums = [1, 2, 3];

// for (let n of nums) {
//     console.log(n);
// }
// var [n1, n2, n3] = nums;
// var newNums = [...nums, 4, 5, 6];


//-------------------------------------------------

// var nums = [1, 2, 3];
// var it=nums[Symbol.iterator]();


//-------------------------------------------------

var idMaker = {
    [Symbol.for('ibm-symbol')]:'this is my symbol, indicates its is am IBM id maker',
    [Symbol.iterator]: function () {
        let id = 0;
        return {
            next: function () {
                id++;
                return {value:id,done:id===11?true:false}
            }
        }
    }
};


for (let id of idMaker) {
    console.log(id);
}
var ids = [...idMaker];
var [id1, id2, id3] = idMaker;



// var otherIdMaker = {};

// if (otherIdMaker[Symbol.for('ibm-symbol')]) {
//     console.log('this is ibm instance')
//     console.log(idMaker[Symbol.for('ibm-symbol')]);
// } else {
//     console.log('its not ibm idMaker');
// }
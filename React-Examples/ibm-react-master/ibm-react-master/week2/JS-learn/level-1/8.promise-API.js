// ES6  ==> Promise API


var pizzaa = {
    getPizza: function () {
        var promise = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('Chicken Pizaa');
                //reject('No Milk');
            },500);
        });
        return promise;
    }
};

var shop = {
    getDrink: function () {
        var promise = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('Pepsi');
                //reject('No Drink');
            },2000);
        });
        return promise;
    }
};

var trainer = {
    doTeach: function () {
        console.log('teaching .js');
        console.log('need party , requesting pizaa & drink');
        var promise1 = pizzaa.getPizza(); // async
        var promise2 = shop.getDrink(); // async
        console.log('got promise...deferring  actions to future');
        
        // Promise.all([promise1,promise2]).then(function (items) {
        Promise.race([promise1,promise2]).then(function (items) {
            console.log('yummy with ' + items);
        }, function (reason) {
            console.log('No Party' + reason);
        });
        console.log('continue on further teaching...');
        console.log('teaching end..');
    }
}

trainer.doTeach();
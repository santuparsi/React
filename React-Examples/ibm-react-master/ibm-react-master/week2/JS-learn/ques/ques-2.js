

// create trainer-obj ==> ( name
var tnr = {
    name:'Rama'
};
 

// create trainer-service
var tnrService= {
    doTeachReact: function () {
        console.log(this.name +" teaching react");
    },
    doTeachMicro: function () {
        console.log(this.name +" teaching micro");
    }
}

// bind event-handler to run doTeach on trainer

// document.querySelector('.btn-primary')
//     .addEventListener('click', function (e) { 
//         tnrService.doTeachReact.call(tnr);
//     });  

// or

document.querySelector('.btn-primary')
.addEventListener('click',tnrService.doTeachReact.bind(tnr))



document.querySelector('.btn-danger')
    .addEventListener('click', function (e) { 
        tnrService.doTeachMi.call(tnr);
    });  



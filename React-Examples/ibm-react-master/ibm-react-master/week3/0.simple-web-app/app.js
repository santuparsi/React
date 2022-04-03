// using DOM  API

// document.addEventListener('DOMContentLoaded', function (e) {

//     // query DOM to find box & buttons
//     var box = document.querySelector('.alert-danger');
//     var hideBtn = document.querySelector('.btn-danger');
//     var showBtn = document.querySelector('.btn-success');
//     var needBtn = document.querySelector('.btn-warning');


//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     });
//     showBtn.addEventListener('click', function (e) {
//         box.style.display = '';
//     });

//     needBtn.addEventListener('click', function (e) {
//         box.textContent = 'i need biryani';
//     });

// });

//----------------------------------------------------------------


$(document).ready(function (e) {

    var box = $('.alert-danger');

    var hideBtn = $('.btn-danger')
    var showBtn = $('.btn-success')
    var needBtn = $('.btn-warning')

    hideBtn.click(function () {
        box.hide(5000);
    });
    showBtn.click(function () {
        box.show(5000);
    });
    needBtn.click(function () {
        box.text('learn jq');
    });

});

//----------------------------------------------------------------
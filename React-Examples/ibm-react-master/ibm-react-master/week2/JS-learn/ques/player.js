document.addEventListener('DOMContentLoaded', function (e) {


    let player = {
        currentTrack: "la la la",
        init() {
            // find all DOM elements of my player
            let startBtn = document.querySelector('.btn-success');
            let dangerBtn = document.querySelector('.btn-danger');

            // var _this = this;            
            // startBtn.addEventListener('click', function (e) {
            //     _this.start();
            // });
            
            // or

            // var _this = this;            
            // var handler = function () {
            //     _this.start();
            // } 
            
            // or

            // var handler = this.start.bind(this);
            // startBtn.addEventListener('click',handler);

            // or

            //startBtn.addEventListener('click',this.start.bind(this));

            // or

            // startBtn.addEventListener('click', function (e) { this.start()});
            startBtn.addEventListener('click', (e) => { this.start() });
            

        },
        start() {
            console.log('playing...' + this.currentTrack);
        }
    };

    player.init();




});
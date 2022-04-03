// Hello Component - class

// way-1 :  ES5 without JSX

// let Hello = React.createClass({
//     render: function () {
//         let ele = React.createElement('div', null,
//             React.createElement('div', null,
//                 React.createElement('span', null, 'Hello......')
//             )
//         );
//         return ele;
//     }
// });

// let hello = React.createElement(Hello);

// ReactDOM.render(hello, document.getElementById('root'));


//------------------------------------------------------------------------

// way-2 : ES5 with JSX

/*
let Hello = React.createClass({
    render: function () {
        let ele= (
            <div>
                <div>
                    <span>Hello from JSX</span>
                </div>
            </div>
        );
        return ele;
    }
});

let hello = <Hello />

ReactDOM.render(hello, document.getElementById('root'));*/



//------------------------------------------------------------------------

// way-3 : ES6 class

/*
class Hello extends React.Component {

    render() {
        let ele = (
            <div>
                <span>Hello from Es6-class</span>
            </div>
        );
        return ele;
    }

}


let hello = <Hello />
ReactDOM.render(hello, document.getElementById('root'));*/


//------------------------------------------------------------------------

// way-4

function Hello() {
        
    let ele = (
            <div>
                <span>Hello from func-class</span>
            </div>
        );
    return ele;

}


let hello = <Hello />
ReactDOM.render(hello, document.getElementById('root'));

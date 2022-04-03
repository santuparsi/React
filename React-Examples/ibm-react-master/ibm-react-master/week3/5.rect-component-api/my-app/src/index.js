import React, { PropTypes,Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';


//---------------------------------------------------------------

/*

class ButtonComponent extends React.Component{

  render() {
    return (
      <button className="pull-right" style={{backgroundColor: this.context.color }}>
        {this.context.action}
      </button>
    );
  }

}


ButtonComponent.contextTypes = {
  color: React.PropTypes.string,
  action:React.PropTypes.string
};

*/


//---------------------------------------------------------------

/*

class MessageComponent extends React.Component{

  render() {
    return (
      <div className="list-group-item">
        {this.props.message}  - {this.context.color}
        <ButtonComponent />
      </div>
    );
  }

}

*/

// MessageComponent.propTypes={
//   message:PropTypes.string.isRequired
// }

// MessageComponent.contextTypes = {
//   color: React.PropTypes.string
// };


//---------------------------------------------------------------

/*

class MessageContainer extends Component{

  getChildContext() {
    return {color: "purple",action:'delete'};
  }

  render() {
    let messages = this.props.messages.map((message, idx) => {
      return <MessageComponent key={idx} message={message} />
      });
    return (
      <div className="alert alert-success list-group">
        {messages}
      </div>
    );
  }

}

MessageContainer.childContextTypes = {
  color: PropTypes.string,
  action:PropTypes.string
};

*/

//---------------------------------------------------------------

// let messages = [
//   "hello",
//   "hi",
//   "how r u",
//   "doing good"
// ];


// let element = <MessageContainer  messages={messages}/>


//---------------------------------------------------------------


// How to create Container-Components with dynamic children ?

/*

class Food extends Component{
  render() {
      return (
        <div className="list-group-item">
          {this.props.name}
        </div>
      );
  }
}

class Product extends Component{
  render() {
      return (
        <div className="list-group-item">
          {this.props.name}
        </div>
      );
  }
}

class ListContainer extends Component{
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Items</div>
        <div className="panel-body">
          <div className="list-group">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


let foodMenu = (
    <ListContainer>
      <Food name="meal-1" />
      <Food name="meal-2"/>
    </ListContainer>
);
  

let productMenu = (
    <ListContainer>
      <Product name="prod-1" />
      <Product name="prod-2"/>
    </ListContainer>
  );
  

  class App extends Component{
  render() {
    return (
      <div className="list-group">
        {foodMenu}
        <hr />
        {productMenu}
      </div>
    );
  }
}

*/


//---------------------------------------------------------------


// conditional rendering

// class DemoComponent extends Component{
  
//   render() {

//     let name = "Nag";
    
//     if (name === "") {
//       return null;
//     } else {
//       return <span className="badge">IBM</span>
//     }
 
//   }

// }

//---------------------------------------------------------------


// Forms

/*

class SimpleFormComponent extends Component{

  constructor() {
    super();
    this.state = {
      name:'Nag'
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted...');
    //let name = this.refs.name.value;  // to get DOM reference
    console.log("hello "+this.state.name);
  }

  handleChange(e) {
    console.log('change event..');
    let v = e.target.value;
    this.setState({name:v});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input type="text" ref="name" value={this.state.name} onChange={this.handleChange.bind(this)} name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}


ReactDOM.render(
  <SimpleFormComponent/>,
  document.getElementById('root')
);


*/



//---------------------------------------------------------------
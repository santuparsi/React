import React from 'react';
export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
     <div>
          <button onClick={this.props.onClick}>
        Click Me!
      </button>
      <label>{this.props.count}</label>
     </div>
    );
  }
}
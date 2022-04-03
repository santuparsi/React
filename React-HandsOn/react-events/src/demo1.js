import React from 'react'
class Component1 extends React.Component
{
     click() {
        alert('Hello World')
    }
    render(){
        return(
<button onClick={this.click}>Click Me</button>
        );
    }
}
export default Component1
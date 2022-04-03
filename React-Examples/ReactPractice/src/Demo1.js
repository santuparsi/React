import React,{Component} from 'react';
export class TickTock extends Component
{
    render()
    {
      
        let Element=(
            <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
        );
        return Element;
    }
}
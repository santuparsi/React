import React,{Component} from 'react';
export class HelloWorld extends Component
{
    render()
    {
        let ele=(
        <div className='well'>
            <span className='badge'>Welcome to react</span>
        </div>
        );
        return ele;
    }
}
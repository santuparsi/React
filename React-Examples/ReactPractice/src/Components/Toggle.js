import React,{Component} from 'react';
export class Toggle extends Component
{
    constructor(props)
    {
        super(props);
        this.state={isToggleOn:true};
        this.handleclick=this.handleclick.bind(this);
    }
    handleclick()
    {
        // let toggle=this.state.isToggleOn;
        // if(toggle)
        // this.setState({isToggleOn:false});
        // else
        //     this.setState({isToggleOn:true});  
        this.state.isToggleOn?this.setState({isToggleOn:false}):this.setState({isToggleOn:true})
    }
    render()
    {
        return(
            <div>
                <br />
 <button onClick={this.handleclick}>{this.state.isToggleOn?'ON':'OFF'}</button>
            </div>
           
        );
    }

}
import React,{Component} from 'react';
export class EventHandler extends Component{
    constructor(props)
    {
        super(props);
        this.state={Uname:''};
        this.Handler=this.Handler.bind(this);
        this.HandlerSubmit=this.HandlerSubmit.bind(this);
    }
    Handler(e)
        {
            alert('Hello '+this.state.Uname);
           // e.preventDefault;
        }
    HandlerSubmit(e)
    {
        this.setState({Uname:e.target.value});
    }
    render()
    {
        return(
            <div>
                <br />
                <label>
                    Name:
                    <input type="text" name="" id="" 
                    onChange={this.HandlerSubmit} />
                </label>
                <button onClick={this.Handler}>ClickMe</button>
            </div>
        );
        
    }

}

import React,{Component} from 'react'
 class Message extends Component
{
    constructor() {
        super();
        this.state={
            message:'Welcome Visitor'
        }
        
    }
    //method
    changeMessage()
    {
        this.setState({
            message:'Thank you for Subscribe'
        })
        console.log(this.state)
    }
    //event handler
    changeFollow=()=>{
        this.setState({
            message:'Thank you for Follow'
        })
        console.log(this.state)
    }
    render()
    {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button><br></br>
            <button onClick={this.changeFollow}>Fallow</button>
        </div>
    )
    }
}
export default Message;
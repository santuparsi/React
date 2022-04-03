import React from 'react'
import {Link,BrowserRouter as Router,Redirect} from 'react-router-dom'
import Form8 from './Form8';
class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={uname:'',pwd:'',msg:''}
    }
    Validate=(event)=>
    {
        let uname=this.state.uname;
        let pwd=this.state.pwd;
        if(uname=="Admin" && pwd=="12345")
        {
            //alert("Valid User");
            this.setState({msg:'Valid Login'})
           
            //event.preventDefault();
           this.props.history.push('/register')
        }
        else
        {
           // alert("Invalid User");
            this.setState({msg:'Invalid Login Credentials'})
            event.preventDefault();  
        }
    }
    SetValue=(event)=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val})
    }
    f=()=>{
        this.props.history.push('/register')
    }
    render(){
        return (
            <form onSubmit={this.Validate}>
                <table border="1">
                   <tbody>
                   <tr>
                        <td>Username</td>
                        <td><input type="text" name="uname" onChange={this.SetValue} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="pwd" onChange={this.SetValue} /></td>
                    </tr>
                    <tr>
                        {/* <td colSpan='2'> <input type="button" onClick={this.Validate} value="Validate" /></td> */}
                        <td colSpan='2'> <input type="submit"/></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                        <span style={{color:'red'}}>{this.state.msg}</span>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                           <input type="button" value="Register" onClick={this.f}></input>
                        </td>
                    </tr>
                   </tbody>
                </table>
            </form>
        )
    }
}
export default Login
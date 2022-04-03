import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:'Admin',
             pwd:'12345',
             msg:''
        }
    }
    setUname=event=>{
        this.setState({
            uname:event.target.value
        })
        console.log(this.state.uname)
    }
    setPwd=event=>{
        this.setState({
            pwd:event.target.value
        })
        console.log(this.state.pwd);
    }
    Validate=()=>{
        let uname=this.state.uname;
        let pwd=this.state.pwd;
        
if(uname==='Admin' && pwd==='12345')
{
this.setState({
    msg:'Valid User'
})
}
else
{
    this.setState({
        msg:'InValid User'
    })
}
    }
    
    render() {
        return (
            <div>
                <table border='1'>
                   <tbody>
                   <tr>
                    <td>Username</td>
                    <td><input type='text' onChange={this.setUname}></input></td>
                    </tr>
                    <tr>
                    <td>Passwrod</td>
                    <td><input type='password' onChange={this.setPwd}></input></td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <button onClick={this.Validate} >SingIn</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <span>{this.state.msg}</span>
                        </td>
                    </tr>
                   </tbody>
                </table>
            </div>
        )
    }
}

import React from 'react';
import {Link, withRouter } from 'react-router-dom'
import ApiFun from '../../_services/api'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            password:''
        }
    }
    getRegister=()=>{
        ApiFun.postApi('register',{firstName:this.state.firstName,lastName:this.state.lastName,userName:this.state.username,email:this.state.email,password:this.state.password})
        .then(json => {
            console.log(json.data,'response of register api----');
            if(json.data.responseCode===200){
                this.props.history.push('/login')
            }
            else{
                this.props.history.push('/register')
            }
        }).catch((error)=>{
        console.log("error-----------",error)
        })
       // this.props.history.push('/login')
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }

render(){
    return (
        <div className="col-md-6 col-md-offset-3">
        <h2>Registration Form</h2><form>
        <div className='form-group'>
            <label>First Name:</label>
            <input type="text" name="firstName" className="form-control" onChange={this.handleChange} value={this.state.firstName} />
        </div>
        <div className='form-group'>
            <label>Last Name:</label>
            <input type="text" name="lastName" className="form-control" onChange={this.handleChange} value={this.state.lastName} />
        </div>
        <div className='form-group'>
            <label>Username:</label>
            <input type="username" name="username" className="form-control" onChange={this.handleChange} value={this.state.username} />
        </div>
        <div className='form-group'>
            <label>Email:</label>
            <input type="email" name="email" className="form-control" onChange={this.handleChange} value={this.state.email} />
        </div>
        <div className='form-group'>
            <label>Password: </label>
            <input type="password" name="password" className="form-control" onChange={this.handleChange} value={this.state.password} />
            </div>
        <button type="button" className="btn btn-primary" onClick={this.getRegister}>Register</button>
        <Link to="/login" className="btn btn-link">Login</Link>
       </form></div>
        
    )
}
}

export default withRouter(Register);
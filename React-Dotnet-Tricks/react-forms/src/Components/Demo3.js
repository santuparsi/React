import React, { Component } from 'react'

export default class Demo3 extends Component {
    initialState={
        nameError:'',
        emailError:'',
        passwordError:''
    }
    constructor(props) {
        super(props);
        this.state=this.initialState;
        this.state={
            name:'',
            email:'',
            pwd:'',
        }
    }
    onChangeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmitHandler=(event)=>{
        const isValid=this.validate();
        if(isValid){
            alert('Valid Form')
        }
        else{
            event.preventDefault();
        }
        
    }
    validate=()=>{
        if(!this.state.name)
        {
            this.setState({
                nameError:'name cannot be blank'
            })
          //  alert('name can not be blank')
            return false;
        }else{ this.setState({
            nameError:''
        })}
        if(!this.state.email.includes('@')){
            this.setState({
                emailError:'invalid emailformat'
            })
           // alert('invalid email');
            return false;
        }
        return true;
    }
    render() {
        return (
            <div>
                <h1></h1>
                <form action="" onSubmit={this.onSubmitHandler}>
                    <div className="from-group">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name"
                        className="form-control" 
                        value={this.state.name} 
                        onChange={this.onChangeHandler} />
                        <span className='text-warning'>{this.state.nameError}</span>
                    </div>
                    <div className="from-group">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email"
                        className="form-control" 
                        value={this.state.email} 
                        onChange={this.onChangeHandler} />
                          <span className='text-warning'>{this.state.emailError}</span>
                    </div>
                    <div className="from-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="pwd"
                        className="form-control" 
                        value={this.state.pwd} 
                        onChange={this.onChangeHandler} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-success" />
                </form>
            </div>
        )
    }

}

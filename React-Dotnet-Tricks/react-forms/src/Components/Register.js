import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            phone:''
        }
        
    }
    // onNameChangeHandler=(event)=>{
    //     this.setState({
    //         name:event.target.value
    //     })
    // }
    onChangeHandler=(event)=>{
            // console.log(event.target.name) //retunrs control name
            // console.log(event.target.value) //returns control value
            this.setState({
                [event.target.name]:event.target.value
            })
    }
    onSubmitHandler=(event)=>{
        event.preventDefault(); //stop form submitssion
        const user={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone
        }
        console.log(user)
        // console.log(this.state.name)
        // console.log(thsi.state.email)
        // console.log(thsi.state.phone)
    }
    render() {
        return (
            <div>
                <h1>{this.state.name} {this.state.email} {this.state.phone}</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' className="form-group" onChange={this.onChangeHandler} value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" name='email' className="form-group"  onChange={this.onChangeHandler} value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone</label>
                        <input type="text" name='phone' className="form-group"  onChange={this.onChangeHandler} value={this.state.phone} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

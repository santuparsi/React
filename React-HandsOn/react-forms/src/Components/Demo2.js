//form-build using functional component
import React, { useState } from 'react'

export default function Demo2() {
    // const [{ nameError, emailError, pwdError }, setErrors] = useState({})

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [nameError,setNameError]=useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(name=='')
        {
            setNameError('name is required')
        }
        // let nameError = ''
        // let emailError = ''
        // let pwdError = ''
        // if (name!='') {
        //     nameError = 'name is required'
        // }
        // if (email!='') {
        //     emailError = 'email is invalid'
        // }
        // if (pwd!='') {
        //     pwdError = 'pwd is required'
        // }
        // setErrors({
        //     nameError:nameError,
        //     emailError:emailError,pwdError:pwdError
        // })
    }
    return (
        <div>
            <h1>{name} {email} {pwd}</h1>
            <div className='text-danger'>
                {nameError}
            </div>
            <form action="" onSubmit={onSubmitHandler}>
                <div className="from-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name"
                        className="form-control"
                        value={name}
                        onChange={event => setName(event.target.value)} />

                </div>
                <div className="from-group">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email"
                        className="form-control"
                        value={email}
                        onChange={event => setEmail(event.target.value)} />

                </div>
                <div className="from-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="pwd"
                        className="form-control"
                        value={pwd}
                        onChange={event => setPwd(event.target.value)} />
                </div>
                <input type="submit" value="Submit" className="btn btn-success" />
            </form>
        </div>
    )
}

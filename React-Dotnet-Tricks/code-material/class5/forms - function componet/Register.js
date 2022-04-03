import React, { useState } from "react";

const Register = () => {
//   const [ { nameError, emailError, passwordError }, setErrors  ] = useState({});

const [nameError, setNameError] = useState('');

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
   
    
    if(name.length <= 0){
      setNameError('name is required')
    }

    console.log('form submitted')
    console.log(nameError)
 
  }

  
  return (
    <div>
      <h1>
        {name}, {email}, {password}
      </h1>
      <div className="text-danger">
          { nameError }
      </div>
      <form onSubmit={ onSubmitHandler }>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            value={name}
            type="text"
            onChange={ event => setName(event.target.value) }
            name="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={ event => setEmail(event.target.value) }
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="text"
            value={password}
            onChange={ event => setPassord(event.target.value) }
            name="password"
            className="form-control"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Register;

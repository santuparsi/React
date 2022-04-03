import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import Endpoints from "../../api/Endpoints";

const RegisterPage = () => {
  const cities = ["Delhi", "Mumbai", "Pune", "Goa"];
  const [{firstNameError, mobileError, passwordError, emailError}, setErrorMessages] = useState({});
  const [responseText, setResponseText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validate = () => {
      if(firstName == ''){
          setErrorMessages({
              firstNameError: 'First Name is Required'
          })
          return false;
      }
      return true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(validate()){
        axios
        .post(Endpoints.REGISTER_URL, { firstName, email, password, mobile })
        .then((response) => {
          console.log(response);
          setResponseText(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
        console.log('error')
    }
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            {responseText && (
              <div class="alert alert-success" role="alert">
                {responseText}
              </div>
            )}

            <h2>Register</h2>

            <hr />
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={onFirstNameChange}
                />
                <small className='text-danger'>{ firstNameError }</small>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={onEmailChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="form-control"
                  value={mobile}
                  onChange={onMobileChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={onPasswordChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <select name="city" id="city" className="form-control">
                  {cities.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="">Gender</label>
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="form-check-input"
                  />
                  <label htmlFor="male" className="form-check-label">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    className="form-check-input"
                  />
                  <label htmlFor="female" className="form-check-label">
                    Female
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="subscribe"
                    id="subscribe"
                    className="form-check-input"
                  />
                  <label htmlFor="subscribe" className="form-check-label">
                    Subscribe
                  </label>
                </div>
              </div>
            
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"                
              />
              <br />
              <div className="text-center">
                <a href="#">Already register? Click Here</a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;

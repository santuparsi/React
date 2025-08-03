import React from "react";
function UserLogin()
{
  return <h1>Welcome Back..</h1>
}
function GuestLogin()
{
  return <h1>Pls SignUp..</h1>
}
function SignUp(props)
{
  const isLoggedIn=props.isLoggedIn;
  if(isLoggedIn)
    {
      return <UserLogin />
    }
    else{
      return <GuestLogin />
    }
 
}
export default SignUp;
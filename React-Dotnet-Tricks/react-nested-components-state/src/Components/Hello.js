import react,{useState} from "react";
const Hello=()=>{
    const [user,setUser]=useState("Guest"); //here user is the state and SetUser is the method to update the user
    const onButtonClick=()=>{
        setUser("Mark");
    }
    return(
<div>
    <h1>Welcome {user}</h1>
    <button onClick={onButtonClick}>LogIn</button>
</div>
    );
}
export default Hello;
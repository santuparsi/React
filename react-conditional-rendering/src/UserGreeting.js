import React, { Component } from 'react'
 class UserGreeting extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLogged:this.props.isLoggedIn
    }
}

    render() {
        //using short circute
      //  return this.state.isLogged && (<p>Welcome Santhosh</p>)
        //using ternory operator
       return  this.state.isLogged?(
       <p>Welcome Santhosh</p>):(
       <p>Welcome Guest</p>
       )
    //using element variables
        // let message='';
        // if(this.state.isLogged)
        // {
        //     message=<p>Welcome Santhosh</p>
        // }
        // else
        // {
        //     message=<p>Welcome Guest</p>
        // }
        // return(
        //     <div>
        //         {message}
        //     </div>
        // )
//using if-else operator
        // if(this.state.isLogged)
        // {
        //     return (
        //         <div>
        //             <p>Welcome Santhosh!!</p>
        //         </div>
        //     )
        // }
        // else
        // {
        //     return(
        //         <div>
        //             <p>Welcome Guest!!!</p>
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting

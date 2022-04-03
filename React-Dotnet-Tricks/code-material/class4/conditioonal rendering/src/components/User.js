import React, { useState } from "react";

const User = () => {
  const [isLoggedIn, setLoggeIn] = useState(true);

  //   if (isLoggedIn) {
  //     return <h1>Welcome Mark</h1>;
  //   } else {
  //     return <h1>Welcome Guest</h1>;
  //   }
  // };

  //   let response;
  //   if (isLoggedIn) {
  //     response = <h1>Welcome Mark</h1>;
  //   } else {
  //     response = <h1>Welcome Guest</h1>;
  //   }

  //   return <div>{response}</div>;

  // return (
  //     isLoggedIn ? <h1>Welcome Mark</h1> : <h1>Welcome Guest</h1>

  // )
//   return isLoggedIn ? (
//     <button className="btn btn-danger">Logout</button>
//   ) : (
//     <button className="btn btn-primary">Login</button>
//   );

    return isLoggedIn && <h1>Welcome Mark</h1>


};

export default User;

import React, { Suspense } from "react";
//Instead of regular import statements, we will use the above approach for lazy loading
const Customer = React.lazy(() => import("./Customer.jsx"));
const Admin = React.lazy(() => import("./Admin.jsx"));
export default function Home(props) {
  if (props.user === "admin") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Admin />
      </Suspense>
    );
  } else if (props.user === "customer") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Customer />
      </Suspense>
    );
  } else {
    return <div>Invalid User!!!</div>;
  }
}

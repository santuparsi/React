import React, { useContext, createContext } from "react";
//create a context with a default value
const MyContext = createContext("default value");
const ChildComponent = () => {
  //consume the context value using useContext
  const contextValue = useContext(MyContext);
  return <p>{contextValue}</p>;
};
const ParentComponent = () => {
  return (
    // <MyContext.Provider value="Virat">
    <ChildComponent />
    // </MyContext.Provider>
  );
};
export default ParentComponent;

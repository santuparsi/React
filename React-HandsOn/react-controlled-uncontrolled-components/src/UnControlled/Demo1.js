import { useRef } from "react";
const Demo1 = () => {
  const inputRef = useRef();
  const handleSubmit = () => {
    alert(`Name:${inputRef.current.value}`);
  };
  return(
    
  )
};
export default Demo1;

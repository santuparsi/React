import React from "react";

const Product = (props) => {
  return (
    <tr>
      <td>{ props.pid }</td>
      <td>{ props.name }</td>
      <td>{ props.mrp }</td>
      <td>{ props.price }</td>
    </tr>
  );
};
export default Product;

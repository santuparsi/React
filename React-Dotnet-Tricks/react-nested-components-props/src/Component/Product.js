import React from "react";
const Product = (props) => {
    return (
        <tr>
            <td>{props.pid}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.stock}</td>
        </tr>
    )
}
export default Product;
import React, { Component } from 'react';

class Product extends Component {
    render() {
        let { product,deleteProduct } = this.props;
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>&#8377;{product.price}</td>
                <td><a href="#" ><span className="glyphicon glyphicon-edit"></span></a></td>
                <td><a href="#" onClick={(e) => { e.preventDefault(); deleteProduct(product.id)}}><span className="glyphicon glyphicon-trash"></span></a></td>
            </tr> 
        );
    }
}

export default Product;
import React, { Component } from 'react';
import Product from './Product'
class ProductList extends Component {
   
    render() {
        let { products,deleteProduct } = this.props;
        let productComps = products.map((product, idx) => { 
            return <Product product={product} key={idx} deleteProduct={deleteProduct}/>
        });
        return (
            <div>
                <table className="table table-bordered table-condensed table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productComps}
                    </tbody> 
                </table>
            </div>
        );
    }
}

export default ProductList;
import React from 'react';
import Product from './Product';

const ProductList = () => {
    return <table className="table table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>PID</th>
                <th>Name</th>
                <th>MRP</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
          <Product pid="1" name="Laptop" mrp="10000" price="9000" />
          <Product pid="2" name="Mobile" mrp="5000" price="4000" />
          <Product pid="3" name="Desktop" mrp="4000" price="3000" />
        </tbody>
    </table>
}
export default ProductList
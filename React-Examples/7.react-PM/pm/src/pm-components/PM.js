import React, { Component } from 'react';

import ProductForm from './ProductForm';
import ProductList from './ProductList';

import _ from 'lodash';

class PM extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: 'Laptop', price: 198000, desc: 'New Mac pro' },
                { id: 2, name: 'Mobile', price: 18000, desc: 'New Model' }
            ]
        };
    }

    addNewProduct(product) {
        this.setState({products:this.state.products.concat(product)});
    }
    deleteProduct(id) {
        let { products } = this.state;
        _.remove(products, product => product.id == id);
        this.setState({products});
    }


    render() {
        let { products } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <ProductForm addNewProduct={(product) => { this.addNewProduct(product); }}/>
                </div>
                <hr/>
                <div className="row">
                    <ProductList products={products} deleteProduct={(id) => { this.deleteProduct(id) }}/>
                </div>
            </div>
        );
    }
}

export default PM;
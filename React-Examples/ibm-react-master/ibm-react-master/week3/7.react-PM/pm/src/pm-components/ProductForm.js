import React, { Component } from 'react';

class ProductForm extends Component {

    localSubmitHandler(e) {
       
        e.preventDefault();
        
        let nameRef = this.refs.name;
        let priceRef = this.refs.price;
        let descRef = this.refs.desc;

        let product = {
            id: Math.floor(Math.random()*100000),
            name: nameRef.value,
            price: priceRef.value,
            desc:descRef.value
        };

        this.props.addNewProduct(product);

        nameRef.value = '';
        priceRef.value = '';
        descRef.value = '';

    }



    render() {
        return (
            <div>
                
                <div className="col-md-6">
                    <form name="productForm" onSubmit={(e) => { this.localSubmitHandler(e) }}>

                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" className="form-control" ref="name"/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input name="price" className="form-control" ref="price"/>
                        </div>
                        <div className="form-group">
                            <label>Desc</label>
                            <textarea rows="5" cols="53" className="form-control" ref="desc"></textarea>
                        </div>
                        
                        <button className="btn btn-primary" type="submit">Save</button>

                    </form>
                </div>

            </div>
        );
    }
}

export default ProductForm;
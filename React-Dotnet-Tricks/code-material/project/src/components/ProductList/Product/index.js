import React from 'react';
import {Constants} from '../../../api/Constans';

const Product = (props) => {
    const { _id, productName, image, unit, price, mrp, description } = props.data;
    return (
        <div class="col-sm-4" key={ _id }>
          <div class="card">
          <img src={ Constants.IMAGE_URL+ image } class="card-img-top" alt={ productName } />
            <div class="card-body">
              <h5 class="card-title">{ productName }</h5>
              <p>{ unit }</p>
             
             <h1>{  price } <span style={{ color: '#999', fontSize: '22px' }}><del>{ mrp }</del></span> </h1>
              <a href="#" class="btn btn-primary btn-block">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
    )
}
export default Product;

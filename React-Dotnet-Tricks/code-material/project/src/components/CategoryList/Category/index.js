import React from 'react';
import { Constants } from '../../../api/Constans';

const Category = (props) => {
    const { catId, catName, catImage  } = props.data;
    return (
        <div class="col-sm-3">
          <div class="card">
          <img src={ Constants.IMAGE_URL+ catImage } class="card-img-top" alt={ catName } />
            <div class="card-body">
              <h5 class="card-title">{ catName }</h5>
             
              <a href="#" class="btn btn-primary btn-block">
                Buy Now
              </a>
            </div>
          </div>
        </div>
    )
}
export default Category;
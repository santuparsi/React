import React from 'react'
import { CONSTANTS } from '../../../constant';

export default function Category(props) {
    const { catId, catName, catImage } = props.data;
    return (
        <div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={CONSTANTS.IMAGE_URL+catImage} className="card-img-top" alt={catName}  />
                    <div className="card-body">
                        <h5 className="card-title">{catName}</h5>

                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

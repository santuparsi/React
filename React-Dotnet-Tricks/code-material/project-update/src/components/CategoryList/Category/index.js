import React from "react";
import { useHistory } from "react-router-dom";
import { Constants } from "../../../api/Constans";

const Category = (props) => {
  let history = useHistory();

  const onClickHandler = () => {
    history.push(`products/${catId}`)
  };

  const { catId, catName, catImage } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img
          src={Constants.IMAGE_URL + catImage}
          class="card-img-top"
          alt={catName}
        />
        <div class="card-body">
          <h5 class="card-title">{catName}</h5>

          <button onClick={onClickHandler} class="btn btn-primary btn-block">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Category;

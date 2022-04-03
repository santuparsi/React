import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import Product from "./Product";

const ProductList = (props) => {  
  let { catId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axios
      .get(`${Endpoints.PRODUCT_BY_CAT_ID + catId}`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h3 className="text-center">All Products</h3>
      <div class="row">
        {products.map((item) => (
          <Product data={item} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(Endpoints.CATEGORY_URL)
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="container">
      <h3 className="text-center">All Categories</h3>
      <div class="row">
          {
              categories.map(item => <Category data={ item } />)
          }
            
      </div>
    </div>
  );
};
export default CategoryList;

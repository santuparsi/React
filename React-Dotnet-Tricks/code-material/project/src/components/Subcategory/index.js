import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";

const SubCategory = () => {
  const catId = 3;
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${Endpoints.SUBCATEGORY_URL + catId}`)
      .then((response) => {
        setSubCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3>Sub Category</h3>
      <ul className="list-group">
      <li className="list-group-item">All</li>
        {subCategories.map(item => (
          <li className="list-group-item" key={ item.subId }>
            { item.subName }
          </li>
        ))}
      </ul>
    </>
  );
};
export default SubCategory;

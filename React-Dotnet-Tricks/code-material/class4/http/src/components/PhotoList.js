import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1 className="text-center">All Photos</h1>
      <div class="row">
        {
            photos.map(photo => <Photo data={photo} />)
        }
      </div>
    </div>
  );
};
export default PhotoList;

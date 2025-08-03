import React from 'react';

const Photo = (props) => {
    const { id, title, thumbnailUrl } = props.data;
    return (
        <div class="col-sm-3" key={id}>
          <div class="card">
            <img src={ thumbnailUrl } class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{ title }</h5>
            </div>
          </div>
        </div>
    )
}
export default Photo;
import react from "react";
import img1 from '../img1.jpg'
import img2 from '../img2.jpg'
const Header=()=>{
    return <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={img1} class="d-block w-100" alt="..." height="300" />
      </div>
      <div class="carousel-item active">
        <img src={img2} class="d-block w-100" alt="..." height='300' />
      </div>
      <div class="carousel-item active">
        <img src={img2} class="d-block w-100" alt="..." height='300'/>
      </div>
    </div>
   <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
}
export default Header;
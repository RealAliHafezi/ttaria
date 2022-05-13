// image
import Amazing from "./../../assets/images/amazing.png";
// slider
import HomeAmazingProductSlider from "../../components/HomeAmazingProductSlider/HomeAmazingProductSlider";
// styles
import "./HomeAmazingProduct.css";
function HomeAmazingProduct() {
  return (
    <div className="HomeAmazingProduct">
      <div className="HomeAmazingProduct_image">
        <img src={Amazing} alt="Amazing" />
      </div>
      <div className="HomeAmazingProduct_slider">
        <HomeAmazingProductSlider />
      </div>
    </div>
  );
}

export default HomeAmazingProduct;

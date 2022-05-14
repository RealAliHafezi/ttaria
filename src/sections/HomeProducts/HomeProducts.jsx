// components
import HomeProductsSlider from "../../components/HomeProductsSlider/HomeProductsSlider";
// icon
import { FcPhoneAndroid } from "react-icons/fc";
// styles
import "./HomeProducts.css";
function HomeProducts() {
return (
    <div className="HomeProducts">
      <div className="HomeProducts_title">
        <span className="HomeProducts_title_iconBox">
          <FcPhoneAndroid className="HomeProducts_title_icon" />
        </span>
        <h3 className="HomeProducts_title_text">موبایل سامسونگ</h3>
      </div>
      <div className="HomeProducts_slider">
        <HomeProductsSlider />
      </div>
    </div>
  );
}

export default HomeProducts;

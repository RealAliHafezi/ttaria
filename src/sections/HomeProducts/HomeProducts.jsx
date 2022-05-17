// components
import HomeProductsSlider from "../../components/HomeProductsSlider/HomeProductsSlider";
// styles
import "./HomeProducts.css";
function HomeProducts(props) {
  return (
    <div className="HomeProducts">
      <div className="HomeProducts_title">
        <span className="HomeProducts_title_iconBox">
          <props.icon className="HomeProducts_title_icon" />
        </span>
        <h3 className="HomeProducts_title_text">{props.title}</h3>
      </div>
      <div className="HomeProducts_slider">
        <HomeProductsSlider products={props.products} />
      </div>
    </div>
  );
}

export default HomeProducts;

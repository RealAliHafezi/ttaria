// style
import "./Products.css";
// components
import Header from "../../sections/Header/Header";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
function Products() {
  return (
    <div className="Products">
      <Header />
      <div className="Products_container">
        <div className="Products_container_filter">
          <ProductsFilter />
        </div>
        <div className="Products_container_products">ali</div>
      </div>
    </div>
  );
}

export default Products;

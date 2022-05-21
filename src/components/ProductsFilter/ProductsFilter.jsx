// style
import ProductsFilterList from "../ProductsFilterList/ProductsFilterList";
import "./ProductsFilter.css";
function ProductsFilter() {
  return (
    <div className="ProductsFilterBox">
      <h3 className="ProductsFilterBox_title">فیلترها</h3>
      <div className="ProductsFilterBox_filterList">
        <div className="ProductsFilterBox_ListItem">
          <ProductsFilterList />
          <span className="ProductsFilterBox_ListItem_title">فقط کالاهای تخفیف دار</span>
        </div>
      </div>
    </div>
  );
}

export default ProductsFilter;

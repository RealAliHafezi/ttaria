// style
import "./ProductsFilterList.css";
function ProductsFilterList() {
  return (
    <>
      <label class="ProductsFilterList_switch">
        <input type="checkbox" className="ProductsFilterList_switchInp" />
        <span class="ProductsFilterList_switch_slider ProductsFilterList_switch_slider_round"></span>
      </label>
    </>
  );
}

export default ProductsFilterList;

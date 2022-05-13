// import icon
import { AiFillHeart } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { VscSave } from "react-icons/vsc";
import { BsStarFill } from "react-icons/bs";
import Imag from "./../../../assets/images/logo.png";
//tyles
import "./CardHomeAmazingProduct.css";
function CardHomeAmazingProduct() {
  return (
    <div className="CardHomeAmazingProduct">
      {/* when hover show */}
      <div className="CardHomeAmazingProduct_icons">
        <span className="CardHomeAmazingProduct_icons_like">
          <AiFillHeart />
        </span>
        <span className="CardHomeAmazingProduct_icons_random">
          <FaRandom />
        </span>
      </div>
      <div className="CardHomeAmazingProduct_image">
        <img src={Imag} alt="product name" />
      </div>
      <div className="CardHomeAmazingProduct_desc">
        <div className="CardHomeAmazingProduct_title">
          <div className="CardHomeAmazingProduct_stars">
            <BsStarFill className="CardHomeAmazingProduct_starIcon CardHomeAmazingProduct_starIcon_none" />
            <BsStarFill className="CardHomeAmazingProduct_starIcon" />
            <BsStarFill className="CardHomeAmazingProduct_starIcon" />
            <BsStarFill className="CardHomeAmazingProduct_starIcon" />
            <BsStarFill className="CardHomeAmazingProduct_starIcon " />
          </div>
          <h4 className="CardHomeAmazingProduct_name">گوشی موبایل سامسونگ گلکسی A12 ظرفیت 64 گیگابایت رم 4</h4>
        </div>
        <div className="CardHomeAmazingProduct_priceBox">
          <div className="CardHomeAmazingProduct_off">4%</div>
          <div className="CardHomeAmazingProduct_price">تومان 3,850,560</div>
          <span className="CardHomeAmazingProduct_leftPrice"></span>
        </div>
        {/* when card hover this display : flex */}
        <div className="CardHomeAmazingProduct_addToShoppingCartBtn">
          <VscSave />
          <span>دیدن جزئیات و خرید</span>
        </div>
      </div>
    </div>
  );
}

export default CardHomeAmazingProduct;

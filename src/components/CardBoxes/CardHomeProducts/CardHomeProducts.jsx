/* 
در این قسمت به دلیل شباهت زیاد به 
CardHomeAmazingProduct
از کد های این قسمت استفاده کردیم و تغییراتی در ان ایجاد کردیم
پس تعجب نکنید که از کجا آمده
این روال در فایل 
jsx
هم استفاده شده است

*/
// image and icons
import { AiFillHeart } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { VscSave } from "react-icons/vsc";
import { BsStarFill } from "react-icons/bs";
import Img from "./../../../assets/images/logo.png";
// style
import "./CardHomeProducts.css";
function CardHomeProducts() {
  return (
    <div className="CardHomeProducts">
      <div className="CardHomeAmazingProduct_icons CardHomeProducts_icons">
        <span className="CardHomeAmazingProduct_icons_like">
          <AiFillHeart />
        </span>
        <span className="CardHomeAmazingProduct_icons_random">
          <FaRandom />
        </span>
      </div>
      <div className="CardHomeProducts_imageBox">
        <img src={Img} alt="Product_Image" />
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
          <h4 className="CardHomeAmazingProduct_name">
            گوشی موبایل سامسونگ گلکسی A12 ظرفیت 64 گیگابایت رم 4
          </h4>
        </div>
        <div className="CardHomeProducts_priceBox">
          <div className="CardHomeAmazingProduct_price">تومان 3,850,560</div>
          <span className="CardHomeProducts_leftPrice"></span>
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

export default CardHomeProducts;

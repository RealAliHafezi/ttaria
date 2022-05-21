import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import {
  addToFavorite,
  removerFromFavorite,
} from "../../../redux/productsSlice";
// data
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
import { MdAddShoppingCart } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import Img from "./../../../assets/images/logo.png";
// style
import "./CardHomeProducts.css";

// styled components
const CardHomeProductsStyle = styled.div`
  .CardHomeAmazingProduct_icons_like * {
    color: ${(props) => (props.Like ? "var(--red)" : "unset")};
  }
`;
//
function CardHomeProducts(props) {
  const dispatch = useDispatch();
  // for add or remove , like and color
  const [like, setLike] = useState(false);
  // add or remove card to favorite
  const handleAddToFavorite = (e, ID) => {
    e.preventDefault();
    setLike(!like);
    if (like) {
      dispatch(removerFromFavorite({ ID }));
      console.log("false");
    } else {
      dispatch(addToFavorite({ ID }));
      console.log("true");
    }
  };
  return (
    <>
      <CardHomeProductsStyle className="CardHomeProducts" Like={like}>
        <div className="CardHomeAmazingProduct_icons CardHomeProducts_icons">
          <span
            className="CardHomeAmazingProduct_icons_like"
            onClick={(e) => handleAddToFavorite(e, props.card.productId)}
          >
            <AiFillHeart />
          </span>
          <span className="CardHomeAmazingProduct_icons_random">
            <FaRandom />
          </span>
        </div>
        <Link to={`/products/${props.card.productId}`}>
          <div className="CardHomeProducts_imageBox">
            <img src={props.card.data.imgBase} alt="Product_Image" />
          </div>
        </Link>
        <div className="CardHomeAmazingProduct_desc">
          <div className="CardHomeAmazingProduct_title">
            <div className="CardHomeAmazingProduct_stars">
              <BsStarFill className="CardHomeAmazingProduct_starIcon CardHomeAmazingProduct_starIcon_none" />
              <BsStarFill className="CardHomeAmazingProduct_starIcon" />
              <BsStarFill className="CardHomeAmazingProduct_starIcon" />
              <BsStarFill className="CardHomeAmazingProduct_starIcon" />
              <BsStarFill className="CardHomeAmazingProduct_starIcon " />
            </div>
            <Link to={`/products/${props.card.productId}`}>
              <h4 className="CardHomeAmazingProduct_name">
                {props.card.data.lable}
              </h4>
            </Link>
          </div>
          <div className="CardHomeProducts_priceBox">
            {props.card.data.have ? (
              <div className="CardHomeAmazingProduct_price">
                {props.card.data.price} تومان
              </div>
            ) : (
              <div className="CardHomeAmazingProduct_price CardHomeAmazingProduct_HaveNot">
                ناموجود
              </div>
            )}
            <span className="CardHomeProducts_leftPrice"></span>
          </div>
          {/* when card hover this display : flex */}
          <Link to={`/products/${props.card.productId}`}>
            <div className="CardHomeAmazingProduct_addToShoppingCartBtn">
              <MdAddShoppingCart />
              <span>دیدن جزئیات و خرید</span>
            </div>
          </Link>
        </div>
      </CardHomeProductsStyle>
    </>
  );
}

export default CardHomeProducts;

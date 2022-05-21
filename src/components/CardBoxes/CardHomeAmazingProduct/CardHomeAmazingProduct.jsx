import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import {
  addToFavorite,
  removerFromFavorite,
} from "../../../redux/productsSlice";
// import icon
import { AiFillHeart } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { VscSave } from "react-icons/vsc";
import { BsStarFill } from "react-icons/bs";
import Imag from "./../../../assets/images/logo.png";
//tyles
import "./CardHomeAmazingProduct.css";
function CardHomeAmazingProduct(props) {
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
    <div className="CardHomeAmazingProduct">
      {/* when hover show */}
      <div className="CardHomeAmazingProduct_icons">
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
          <h4 className="CardHomeAmazingProduct_name">
            {props.card.data.lable}
          </h4>
        </div>
        <div className="CardHomeAmazingProduct_priceBox">
          <div className="CardHomeAmazingProduct_off">
            %{props.card.data.off}
          </div>
          <div className="CardHomeAmazingProduct_price">
            تومان {props.card.data.price}
          </div>
          <span className="CardHomeAmazingProduct_leftPrice"></span>
        </div>
        {/* when card hover this display : flex */}
        <Link to={`/products/${props.card.productId}`}>
          <div className="CardHomeAmazingProduct_addToShoppingCartBtn">
            <VscSave />
            <span>دیدن جزئیات و خرید</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardHomeAmazingProduct;

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
// reducers from redux-toolkit
import {
  handleFadeOutIn,
  handleFadeInOut,
} from "../../../sections/Header/HeaderSlice";
// style
import "./HeaderBottom.css";
// icon
import { GoThreeBars } from "react-icons/go";
// menu items
import { HeaderMenuItems } from "./../../../data/HeaderMenuItems/headerMenuItems";
import HeaderBottomFadeMenu from "../HeaderBottomFadeMenu/HeaderBottomFadeMenu";
function HeaderBottom() {
  const dispatch = useDispatch();
  const menuFadeRef = useRef();
  // for child component
  const [FadeOut, setFadeOut] = useState(false);
  const [FadeIn, setFadeIn] = useState(false);
  const handleFadeIn = () => {
    menuFadeRef.current.style.visibility = "visible";
    menuFadeRef.current.style.opacity = "1";
    dispatch(handleFadeInOut());
  };
  const handleFadeOut = () => {
    menuFadeRef.current.style.visibility = "hidden";
    menuFadeRef.current.style.opacity = "0";
    dispatch(handleFadeOutIn);
  };
  return (
    <>
      <ul className="header_bottom_menuList">
        <li
          onMouseOver={handleFadeIn}
          onMouseOut={handleFadeOut}
          className="header_bottom_menuListItem header_bottom_menuListItem_bar"
        >
          <GoThreeBars className="header_bottom_menuListItem_icon header_bottom_menuListItem_iconBar" />
          <span className="header_bottom_menuListItemText">
            دسته بندی کالا ها
          </span>
        </li>
        {HeaderMenuItems.map((item, index) => {
          return (
            <li key={index} className="header_bottom_menuListItem">
              {item.icon}
              <span className="header_bottom_menuListItemText">
                {item.text}
              </span>
            </li>
          );
        })}
        <div
          id="header_menu_fadeIn"
          ref={menuFadeRef}
          onMouseOver={handleFadeIn}
          onMouseOut={handleFadeOut}
        >
          <HeaderBottomFadeMenu />
        </div>
      </ul>
    </>
  );
}

export default HeaderBottom;

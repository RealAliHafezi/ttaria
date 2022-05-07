import { useRef } from "react";
import { useDispatch } from "react-redux";
// reducers from redux-toolkit
import {
  handleFadeOutIn,
  handleFadeInOut,
  handleFadeInOut2,
  handleFadeOutIn2,
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
  const handleFadeIn = () => {
    menuFadeRef.current.style.visibility = "visible";
    menuFadeRef.current.style.opacity = "1";
    dispatch(handleFadeOutIn());
    dispatch(handleFadeInOut2());
  };
  const handleFadeOut = () => {
    menuFadeRef.current.style.visibility = "hidden";
    menuFadeRef.current.style.opacity = "0";
    dispatch(handleFadeInOut());
    dispatch(handleFadeOutIn2());
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

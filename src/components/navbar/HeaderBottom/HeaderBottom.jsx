import { useRef, useState } from "react";
// style
import "./HeaderBottom.css";
// icon
import { GoThreeBars } from "react-icons/go";
// menu items
import { HeaderMenuItems } from "./../../../data/HeaderMenuItems/headerMenuItems";
import HeaderBottomFadeMenu from "../HeaderBottomFadeMenu/HeaderBottomFadeMenu";
function HeaderBottom() {
  const [Fade1, setFade1] = useState(false);
  const [Fade2, setFade2] = useState(false);
  const menuFadeRef = useRef();
  // for child component
  const handleFadeIn = () => {
    menuFadeRef.current.style.visibility = "visible";
    menuFadeRef.current.style.opacity = "1";
    setFade1(false);
    setFade2(true);
  };
  const handleFadeOut = () => {
    menuFadeRef.current.style.visibility = "hidden";
    menuFadeRef.current.style.opacity = "0";
    setFade1(true);
    setFade2(false);
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
          <HeaderBottomFadeMenu Fade1={Fade1} Fade2={Fade2} />
        </div>
      </ul>
    </>
  );
}

export default HeaderBottom;

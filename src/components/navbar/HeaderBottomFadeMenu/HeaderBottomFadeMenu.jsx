import { useRef } from "react";
import { useSelector } from "react-redux";
// left Items
import {
  systemSecurityFun,
  electronicFun,
  machine,
} from "./../HeaderBottomFadeMenuItems/HeaderBottomFadeMenuItems";
// style
import "./HeaderBottomFadeMenu.css";
function HeaderBottomFadeMenu() {
  const FadeIn = useSelector((state) => state.ResponsiveMenu.FadeIn);
  const FadeOut = useSelector((state) => state.ResponsiveMenu.FadeOut);
  const firstItemRef = useRef();
  const leftFirstRef = useRef();
  const leftTwoRef = useRef();
  const leftThreeRef = useRef();
  const handleHover = (e) => {
    //   for right items
    e.target.className =
      "header_menu_fadeIn_rightItem header_menu_fadeIn_rightItem_isActive";
    // for left items
    const ID = e.target.id;
    if (ID == "electronic") {
      leftFirstRef.current.style.display = "flex";
      leftTwoRef.current.style.display = "none";
      leftThreeRef.current.style.display = "none";
      //   when left items hover , also right item hover
      leftFirstRef.current.addEventListener("mouseover", () => {
        e.target.className =
          "header_menu_fadeIn_rightItem header_menu_fadeIn_rightItem_isActive";
      });
      leftFirstRef.current.addEventListener("mouseout", () => {
        e.target.className = "header_menu_fadeIn_rightItem";
      });
    } else if (ID == "systemSecurity") {
      leftFirstRef.current.style.display = "none";
      leftTwoRef.current.style.display = "flex";
      leftThreeRef.current.style.display = "none";
      //   when left items hover , also right item hover
      leftTwoRef.current.addEventListener("mouseover", () => {
        e.target.className =
          "header_menu_fadeIn_rightItem header_menu_fadeIn_rightItem_isActive";
      });
      leftTwoRef.current.addEventListener("mouseout", () => {
        e.target.className = "header_menu_fadeIn_rightItem";
      });
    } else if (ID == "machine") {
      leftFirstRef.current.style.display = "none";
      leftTwoRef.current.style.display = "none";
      leftThreeRef.current.style.display = "flex";
      //   when left items hover , also right item hover
      leftThreeRef.current.addEventListener("mouseover", () => {
        e.target.className =
          "header_menu_fadeIn_rightItem header_menu_fadeIn_rightItem_isActive";
      });
      leftThreeRef.current.addEventListener("mouseout", () => {
        e.target.className = "header_menu_fadeIn_rightItem";
      });
    }
  };
  const handleNotHover = (e) => {
    e.target.className = "header_menu_fadeIn_rightItem";
  };
  if (FadeOut) {
    firstItemRef.current.className =
      "header_menu_fadeIn_rightItem header_menu_fadeIn_rightItem_isActive";
    //
    leftFirstRef.current.style.className = "header_menu_fadeIn_leftItemShow";
  } else if (FadeIn) {
    leftFirstRef.current.style.display = "flex";
    leftTwoRef.current.style.display = "none";
    leftThreeRef.current.style.display = "none";
  }
  return (
    <>
      <div className="header_menu_fadeIn_rightItems">
        <ul className="header_menu_fadeIn_rightMenu">
          <li
            ref={firstItemRef}
            id="electronic"
            className="header_menu_fadeIn_rightItem header_menu_fadeIn_rightItem_isActive"
            onMouseOver={(e) => handleHover(e)}
            onMouseOut={(e) => handleNotHover(e)}
          >
            لوازم الکترونیک
          </li>
          <li
            onMouseOver={(e) => handleHover(e)}
            onMouseOut={(e) => handleNotHover(e)}
            id="systemSecurity"
            className="header_menu_fadeIn_rightItem"
          >
            سیستم های امنیتی و نطاری
          </li>
          <li
            onMouseOver={(e) => handleHover(e)}
            onMouseOut={(e) => handleNotHover(e)}
            id="machine"
            className="header_menu_fadeIn_rightItem"
          >
            ماشین های اداری
          </li>
        </ul>
      </div>
      {/* onHover top Items bottom items show */}
      <div className="header_menu_fadeIn_leftItems">
        <div ref={leftFirstRef} className="header_menu_fadeIn_leftItemHide">
          {electronicFun()}
        </div>
        <div ref={leftTwoRef} className="header_menu_fadeIn_leftItemHide">
          {systemSecurityFun()}
        </div>
        <div ref={leftThreeRef} className="header_menu_fadeIn_leftItemHide">
          {machine()}
        </div>
      </div>
    </>
  );
}
export default HeaderBottomFadeMenu;

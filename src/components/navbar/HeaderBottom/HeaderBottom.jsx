import { useRef } from "react";
// style
import "./HeaderBottom.css";
// menu items
import { HeaderMenuItems } from "./../../../data/HeaderMenuItems/headerMenuItems";
function HeaderBottom({ ref }) {
  return (
    <ul className="header_bottom_menuList">
      {HeaderMenuItems.map((item, index) => {
        return (
          <li key={index} className="header_bottom_menuListItem">
            {item.icon}
            <span className="header_bottom_menuListItemText">{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderBottom;

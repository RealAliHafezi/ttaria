// icons
import { MdKeyboardArrowLeft } from "react-icons/md";
// data
import {
  menuLeftData1,
  menuLeftData2,
  menuLeftData3,
} from "../../../data/HeaderMenuItems/HedaerBottomFadeMenuItemsData";
// style
import "./HeaderBottomFadeMenuItems.css";
// when menuBottom fadeIn leftItems

function electronicFun() {
  return (
    <>
      <h3 className="header_menu_fadeIn_left_listItem header_menu_fadeIn_leftItem_bold header_menu_fadeIn_leftItem_title">
        <span>همه دسته بندی های لوازم الکترونیکی</span>
        <MdKeyboardArrowLeft className="header_menu_fadeIn_left_list_icon" />
      </h3>
      <ul className="header_menu_fadeIn_left_list">
        {menuLeftData1.length
          ? menuLeftData1.map((item1, index1) => {
              return (
                <>
                  <li
                    key={index1}
                    className="header_menu_fadeIn_left_listItem header_menu_fadeIn_leftItem_bold header_menu_fadeIn_leftItem_title"
                  >
                    <span>{item1.name}</span>
                    <MdKeyboardArrowLeft className="header_menu_fadeIn_left_list_icon" />
                  </li>
                  {item1.data.length
                    ? item1.data.map((item2, index2) => {
                        return (
                          <li
                            key={index2}
                            className="header_menu_fadeIn_left_listItem"
                          >
                            <span>{item2}</span>
                          </li>
                        );
                      })
                    : null}
                </>
              );
            })
          : null}
      </ul>
    </>
  );
}
function systemSecurityFun() {
  return (
    <ul className="header_menu_fadeIn_left_list">
      <li className="header_menu_fadeIn_left_listItem header_menu_fadeIn_leftItem_bold header_menu_fadeIn_leftItem_title">
        <span>همه دسته بندی های سیستم های امنیتی و نظارتی</span>
        <MdKeyboardArrowLeft className="header_menu_fadeIn_left_list_icon" />
      </li>
      {menuLeftData2.map((item, index) => {
        return (
          <li
            key={index}
            className="header_menu_fadeIn_left_listItem header_menu_fadeIn_leftItem_bold"
          >
            <span>{item.name}</span>
            <MdKeyboardArrowLeft className="header_menu_fadeIn_left_list_icon" />
          </li>
        );
      })}
    </ul>
  );
}
function machine() {
  return (
    <ul className="header_menu_fadeIn_left_list">
      <li className="header_menu_fadeIn_left_listItem header_menu_fadeIn_leftItem_bold header_menu_fadeIn_leftItem_title">
        <span>همه دسته بندی های ماشین های اداری</span>
        <MdKeyboardArrowLeft className="header_menu_fadeIn_left_list_icon" />
      </li>
      {menuLeftData3.map((item, index) => (
        <li
          key={index}
          className="header_menu_fadeIn_left_listItem header_menu_fadeIn_leftItem_bold"
        >
          <span>{item.name}</span>
          <MdKeyboardArrowLeft className="header_menu_fadeIn_left_list_icon" />
        </li>
      ))}
    </ul>
  );
}
export { electronicFun, systemSecurityFun, machine };

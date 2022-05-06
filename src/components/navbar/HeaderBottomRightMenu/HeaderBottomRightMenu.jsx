import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// reducers from redux-toolkit
import { HideMenu } from "../../../sections/Header/HeaderSlice";
// icons and images
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import Logo from "./../../../assets/images/logo.png";
// style
import "./HeaderBottomRightMenu.css";
// data
import { HeaderMenuItems } from "./../../../data/HeaderMenuItems/headerMenuItems";
import {
  menuLeftData1,
  menuLeftData2,
  menuLeftData3,
} from "../../../data/HeaderMenuItems/HedaerBottomFadeMenuItemsData";
// style with styled-components
const HeaderBottomResponsiveRightMenu = styled.div`
  right: ${(props) => (props.ShowHide ? "0" : "-290px")};
`;
//
function HeaderBottomRightMenu() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const dispatch = useDispatch();
  // give state from redux-toolkit (HeaderSlice.jsx)
  // select state
  let ShowHide = useSelector((state) => state.ResponsiveMenu.ResponsiveMenu);
  //framer motion animations
  const Animate1 = {
    hidden: {
      height: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    show: {
      height: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const Animate2 = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  // for resize page and remove this responsive menu
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 961) {
        dispatch(HideMenu());
      }
    });
  }, [window.innerWidth]);
  return (
    <HeaderBottomResponsiveRightMenu
      ShowHide={ShowHide}
      className="Header_Bottom_Responsive_RightMenu"
    >
      {/* close btn */}
      <span id="close_responsive_rightMenuItems">
        <IoMdClose onClick={() => dispatch(HideMenu())} />
      </span>
      <div className="Header_Bottom_Responsive_RightMenuLogo">
        <img src={Logo} alt="Logo" />
      </div>
      {/* list1 */}
      <ul className="Header_Bottom_Responsive_RightMenu_List1">
        {HeaderMenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="Header_Bottom_Responsive_RightMenu_List1Item"
            >
              {item.icon}
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
      {/* list2 */}
      <div className="Header_Bottom_Responsive_RightMenu_Bottom">
        <div className="Header_Bottom_Responsive_RightMenu_BottomItem">
          <div
            className="Header_Bottom_Responsive_RightMenu_BottomItemTitle"
            onClick={(e) => {
              setOpen1(!open1);
              open1
                ? (e.target.lastChild.style.transform = "rotateZ(180deg)")
                : (e.target.lastChild.style.transform = "rotateZ(0)");
            }}
          >
            <span>لوازم الکترونیکی</span>
            <MdKeyboardArrowDown className="Header_Bottom_Responsive_RightMenu_BottomItemIcon" />
          </div>
          <>
            <AnimatePresence initial={false}>
              {!open1 && (
                <motion.ul
                  variants={Animate1}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="Header_Bottom_Responsive_RightMenu_List2"
                >
                  {menuLeftData1.map((item, index) => {
                    return (
                      <motion.li
                        variants={Animate2}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        key={index}
                        className="Header_Bottom_Responsive_RightMenu_List2Item"
                      >
                        <div className="Header_Bottom_Responsive_RightMenu_List2ItemAnother">
                          {item.name}
                          {item.data.length ? (
                            <MdKeyboardArrowDown className="Header_Bottom_Responsive_RightMenu_BottomItemIcon" />
                          ) : null}
                        </div>
                        <motion.ul
                          variants={Animate1}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="Header_Bottom_Responsive_RightMenu_List22"
                        >
                          {item.data.length
                            ? item.data.map((item1, index1) => {
                                return (
                                  <motion.li
                                    variants={Animate2}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    key={index1}
                                    className="Header_Bottom_Responsive_RightMenu_List2Item22"
                                  >
                                    <MdKeyboardArrowLeft className="Header_Bottom_Responsive_RightMenu_BottomItemIconLeft" />
                                    <span>{item1}</span>
                                  </motion.li>
                                );
                              })
                            : null}
                        </motion.ul>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        </div>
        <div className="Header_Bottom_Responsive_RightMenu_BottomItem">
          <div
            className="Header_Bottom_Responsive_RightMenu_BottomItemTitle"
            onClick={(e) => {
              setOpen2(!open2);
              open2
                ? (e.target.lastChild.style.transform = "rotateZ(180deg)")
                : (e.target.lastChild.style.transform = "rotateZ(0)");
            }}
          >
            <span>سیستم های امنیتی و نظاری</span>
            <MdKeyboardArrowDown className="Header_Bottom_Responsive_RightMenu_BottomItemIcon" />
          </div>
          <AnimatePresence initial={false}>
            {!open2 && (
              <motion.ul
                variants={Animate1}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="Header_Bottom_Responsive_RightMenu_List2"
              >
                {menuLeftData2.map((item, index) => {
                  return (
                    <motion.li
                      variants={Animate2}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      key={index}
                      className="Header_Bottom_Responsive_RightMenu_List2Item"
                    >
                      {item.name}
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="Header_Bottom_Responsive_RightMenu_BottomItem">
          <div
            className="Header_Bottom_Responsive_RightMenu_BottomItemTitle"
            onClick={(e) => {
              setOpen3(!open3);
              open3
                ? (e.target.lastChild.style.transform = "rotateZ(180deg)")
                : (e.target.lastChild.style.transform = "rotateZ(0)");
            }}
          >
            <span>ماشین های اداری</span>
            <MdKeyboardArrowDown className="Header_Bottom_Responsive_RightMenu_BottomItemIcon" />
          </div>
          <AnimatePresence initial={false}>
            {!open3 && (
              <motion.ul
                variants={Animate1}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="Header_Bottom_Responsive_RightMenu_List2"
              >
                {menuLeftData3.map((item, index) => {
                  return (
                    <motion.li
                      variants={Animate2}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      key={index}
                      className="Header_Bottom_Responsive_RightMenu_List2Item"
                    >
                      {item.name}
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </HeaderBottomResponsiveRightMenu>
  );
}

export default HeaderBottomRightMenu;

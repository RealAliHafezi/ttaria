import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// images and icons
import Logo from "./../../assets/images/logo.png";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
// from redux (reducers)
import { ShowMenu } from "./HeaderSlice";
// components
import NavTop from "./../../components/navbar/NavbarTop/NavTop";
import HeaderBottomRightMenu from "../../components/navbar/HeaderBottomRightMenu/HeaderBottomRightMenu";
// style
import "./Header.css";
import HeaderBottom from "../../components/navbar/HeaderBottom/HeaderBottom";
// style with styled-components
function Header() {
  const LikeCounter = useSelector((state) => state.Product.favorite);
  const dispatch = useDispatch();
  const navRef = useRef();
  const headerRef = useRef();
  // for navbar scroll
  useEffect(() => {
    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navRef.current.style.bottom = "0";
      } else if (scrollTop <= lastScrollTop) {
        navRef.current.style.bottom = "-50px";
      }
      if (window.scrollY > 80) {
        headerRef.current.style.top = "0";
      } else if (window.screenY <= 80) {
        headerRef.current.style.top = "70px";
      }
      lastScrollTop = scrollTop;
    });
  }, [window.scrollY]);

  //
  return (
    <>
      <NavTop />
      <header className="Header" ref={headerRef}>
        <div className="header_container header-responsive_hide_items">
          <div className="header_right">
            <div className="header_rightLogo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="header_right_searchbox">
              <input
                type="text"
                placeholder="?????? ?????????? ???? ???????? ???????? ?????? ???? ?????????? ???????? ..."
              />
              <AiOutlineSearch className="header_right_searchboxIcon" />
            </div>
          </div>
          <div className="header_left">
            <Link to={"/favorite"}>
              <div className="header_leftBox">
                <AiOutlineHeart className="header_leftBoxIcon" />
                <span>{LikeCounter.length ? LikeCounter.length : "??"}</span>
              </div>
            </Link>
            <div className="header_leftBox">
              <RiShoppingBasket2Line className="header_leftBoxIcon" />
              <span>??</span>
            </div>
            <div className="header_left_loginBtn ">
              <FaRegUserCircle className="header_left_loginIcon" />
              <span>?????? ?????? ???? ??????????</span>
            </div>
          </div>
        </div>
        <nav
          ref={navRef}
          className="header_bottom_menu header-responsive_hide_items"
        >
          <HeaderBottom />
        </nav>
        {/* responsive mode */}
        <div className="responsive_header_container">
          <div className="responsive_header_top">
            <div className="responsive_header_topBox_icon">
              <GoThreeBars
                className="responsive_header-menubarIcon"
                onClick={() => {
                  dispatch(ShowMenu());
                }}
              />
            </div>
            <div className="responsive_header_topBox_logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="responsive_header_topBox_icon">
              <RiShoppingBasket2Line className="responsive_header_shoppingCart" />
              <span className="header_top_shoppingCart">0</span>
            </div>
          </div>
          <div className="responsive_header_bottom">
            <div className="responsive_header-bottom_searchbox">
              <input
                type="text"
                placeholder="?????? ?????????? ???? ???????? ???????? ?????? ???? ?????????? ???????? ..."
              />
              <AiOutlineSearch className="responsive_header-bottom_searchboxIcon" />
            </div>
            <div className="responsive_header-bottom_loginIcon">
              <FaRegUserCircle />
            </div>
          </div>
        </div>
        {/* responsive menu */}
        <HeaderBottomRightMenu />
      </header>
    </>
  );
}

export default Header;

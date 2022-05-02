import { useRef, useEffect } from "react";
// images and icons
import Logo from "./../../assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
// components
import NavTop from "./../../components/navbar/NavbarTop/NavTop";
// style
import "./Header.css";
import HeaderBottom from "../../components/navbar/HeaderBottom/HeaderBottom";
//
function Header() {
  const navRef = useRef();
  // for navbar scroll
  useEffect(() => {
    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop);
      if (scrollTop > lastScrollTop) {
        navRef.current.style.bottom = "0";
      } else {
        navRef.current.style.bottom = "-50px";
      }
      lastScrollTop = scrollTop;
    });
  }, [window.scrollY]);
  //
  return (
    <>
      <NavTop />
      <header className="Header">
        <div className="header_container">
          <div className="header_right">
            <div className="header_rightLogo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="header_right_searchbox">
              <input
                type="text"
                placeholder="نام محصول یا برند مورد نظر را جستجو کنید ..."
              />
              <AiOutlineSearch className="header_right_searchboxIcon" />
            </div>
          </div>
          <div className="header_left">
            <div className="header_leftBox">
              <AiOutlineHeart className="header_leftBoxIcon" />
              <span>0</span>
            </div>
            <div className="header_leftBox">
              <RiShoppingBasket2Line className="header_leftBoxIcon" />
              <span>0</span>
            </div>
            <div className="header_left_loginBtn">
              <FaRegUserCircle className="header_left_loginIcon" />
              <span>ثبت نام یا عضویت</span>
            </div>
          </div>
        </div>
        <nav className="header_bottom_menu" ref={navRef}>
          <HeaderBottom />
        </nav>
      </header>
    </>
  );
}

export default Header;

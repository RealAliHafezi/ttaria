// libraries
import styled from "styled-components";
// images and icons
import Logo from "../../assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
// styles
const NavbarBaseS = styled.div`
  /* position: sticky;
  position: -webkit-sticky;
  top: 0; */
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: var(--background);
  z-index: 99;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    max-width: 9rem;
    margin-left: 3rem;
    .logoImage {
      width: 100%;
      object-fit: fill;
    }
  }
  .searchBox {
    width: 26rem;
    display: flex;
    align-items: center;
    position: relative;
    .searchInp {
      width: 100%;
      height: 100%;
      font-size: 14px;
      padding: 15px 12px;
      border: 1px solid white;
      border-radius: 10px;
      background-color: var(--gray);
      transition: all 0.2s;
      :focus {
        outline: none;
        background-color: white;
        border: 1px solid var(--border);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    .searchIcon {
      color: var(--primary);
      position: absolute;
      left: 10px;
      font-size: 30px;
    }
  }
  .loginBtn {
    padding: 8px 12px;
    background-color: var(--background);
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    :hover .userIcon {
      transform: rotateZ(180deg);
    }
    .userIcon {
      font-size: 26px;
      margin-left: 7px;
      transition: all 0.1s;
    }
  }
  .iconBox {
    margin-left: 20px;
    font-size: 28px;
    display: flex;
    align-items: center;
    position: relative;
    span {
      font-size: 12px;
      width: 18px;
      height: 18px;
      background-color: var(--primary);
      color: white;
      position: absolute;
      top: -5px;
      left: -5px;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
`;
function NavbarBase() {
  return (
    <NavbarBaseS style={{ position: "sticky", top: "0" }}>
      <div className="box">
        <div className="logo">
          <img src={Logo} alt="logo" className="logoImage" />
        </div>
        <div className="searchBox">
          <input
            type="text"
            className="searchInp"
            placeholder="نام محصول یا برند را جستو کنید ..."
          />
          <AiOutlineSearch className="searchIcon" />
        </div>
      </div>
      <div className="box">
        <div className="iconBox">
          <AiOutlineHeart />
          <span>0</span>
        </div>
        <div className="iconBox">
          <RiShoppingBasket2Line />
          <span>0</span>
        </div>
        <button className="loginBtn">
          <FaRegUserCircle className="userIcon" />
          <span>ثبت نام یا عضویت</span>
        </button>
      </div>
    </NavbarBaseS>
  );
}

export default NavbarBase;

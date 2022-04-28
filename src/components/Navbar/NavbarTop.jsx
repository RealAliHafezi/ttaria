// libraries
import styled from "styled-components";
// icons
import { GiRotaryPhone } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
// styles
const NavbarTopS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 35px;
  border-bottom: 1px solid var(--border);
  background-color: var(--background);
  z-index: 99;

  @media only screen and (max-width: 960px) {
    display: none;
  }
  .box,
  .item {
    display: flex;
    align-items: center;
  }
  .item {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 0.4px;
    font-family: "shabnamThin";
    :not(:first-child) {
      margin-right: 15px;
    }
    .icon {
      font-size: 18px;
      color: black;
      margin-left: 5px;
    }
  }
  .icons {
    font-size: 26px;
    :not(:last-child) {
      margin-left: 20px;
    }
  }
`;
function NavbarTop() {
  return (
    <NavbarTopS>
      <div className="box">
        <div className="item">
          <GiRotaryPhone className="icon" />
          <h4>021-88800138</h4>
        </div>
        <div className="item">
          <HiMail className="icon" />
          <h4>info@ttaria.com</h4>
        </div>
      </div>
      <div className="box">
        <FaHome className="icons" style={{ color: "rgba(0,0,0,0.75)" }} />
        <AiOutlineInstagram className="icons" style={{ color: "var(--red)" }} />
        <FaTelegramPlane
          className="icons"
          style={{ color: "var(--primary)" }}
        />
      </div>
    </NavbarTopS>
  );
}
export default NavbarTop;

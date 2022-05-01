// style
import "./NavTop.css";
// icons from react-icons
import { GiRotaryPhone } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
//
function NavTop() {
  return (
    <nav className="navbarTop">
      <div className="navbarTop_right">
        <div className="navbarTop_rightBox">
          <GiRotaryPhone className="navbarTop_rightIcon" />
          <h4>021-88800138</h4>
        </div>
        <div className="navbarTop_rightBox">
          <HiMail className="navbarTop_rightIcon" />
          <h4>info@ttaria.com</h4>
        </div>
      </div>
      <div className="navbarTop_left">
        <FaHome style={{ color: "rgba(0,0,0,0.75)" }} />
        <AiOutlineInstagram style={{ color: "var(--red)" }} />
        <FaTelegramPlane style={{ color: "var(--primary)" }} />
      </div>
    </nav>
  );
}

export default NavTop;

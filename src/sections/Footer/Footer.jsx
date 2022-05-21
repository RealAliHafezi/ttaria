// image
import Logo from "./../../assets/images/footer/logo.png";
// data
import { Footer1Data, Footer2Data } from "./FooterData";
// icons
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
// style
import "./Footer.css";
//
function Footer() {
  const handleBackTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footerTop">
        <button className="footer_btnTop">
          <span className="footer_btnTop_icon">
            <IoIosArrowUp />
          </span>
          <span className="footer_btnTop_text" onClick={handleBackTop}>
            برگشت به بالا
          </span>
        </button>
      </div>
      {/* footerbox2 */}
      <div className="footerBox">
        {Footer1Data.length &&
          Footer1Data.map((item, index) => (
            <div className="footerBox_twoBox" key={index}>
              <div className="footerBox_twoBox_imageBox">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="footerBox_twoBox_text">
                <div className="footerBox_twoBox_title">{item.title}</div>
                <p className="footerBox_twoBox_desc">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="footerBox2">
        <div className="footerBox_threeBox">
          <p className="footerBox_address">
            آدرس: تهران، میدان ولیعصر مجتمع ایرانیان طبقه 8 واحد 6 تلفن:
            02188800138
          </p>
        </div>
        <div className="footerBox_threeBox_help">
          {Footer2Data.length &&
            Footer2Data.map((item, index) => (
              <ul className="footerBox_threeBox_list" key={index}>
                <h2 className="footerBox_threeBox_title">{item.title}</h2>
                {item.list.length &&
                  item.list.map((item2, index2) => (
                    <li className="footerBox_threeBox_listItem" key={index2}>
                      {item2}
                    </li>
                  ))}
              </ul>
            ))}
        </div>
        <div className="footerBox_threeBox">
          <div className="footerBox_threeBox_logo">
            <img src={Logo} alt="Logo" />
          </div>
          <h2 className="footerBox_threeBox_mediaTitle">
            فروشگاه آریا را در شبکه‌های اجتماعی دنبال کنید :
          </h2>
          <div className="footerBox_socialMedia">
            <AiOutlineInstagram
              style={{ color: "var(--red)" }}
              className="footerBox_socialMedia_icon"
            />
            <FaTelegramPlane
              style={{ color: "var(--primary)" }}
              className="footerBox_socialMedia_icon"
            />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <h3>
          © تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت طرفه تجارت آریا
          میباشد
        </h3>
      </div>
    </footer>
  );
}

export default Footer;

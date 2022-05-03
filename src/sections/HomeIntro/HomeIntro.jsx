// styles
import "./HomeIntro.css";
// img
import HomeIntroFirstBoxIMG from "./../../assets/images/Advertise/HomeTop.jpg";
import HomeIntroTwoBoxIMG1 from "./../../assets/images/Advertise/TablighTop2.jpg";
import HomeIntroTwoBoxIMG2 from "./../../assets/images/Advertise/TablighTop3.jpg";
function HomeIntro() {
  return (
    <div className="HomeIntro">
      <div className="HomeIntro_firstBox_imgBox">
        <img src={HomeIntroFirstBoxIMG} alt="advertise" />
      </div>
      <div className="HomeIntro_twoBox">
        <div className="HomeIntro_twoBox_sliderBox">
          <img src={HomeIntroTwoBoxIMG1} alt="" />
        </div>
        <div className="HomeIntro_twoBox_twoBox">
          <div className="HomeIntro_twoBox_twoBox_imgBox">
            <img src={HomeIntroTwoBoxIMG1} alt="advertise" />
          </div>
          <div className="HomeIntro_twoBox_twoBox_imgBox">
            <img src={HomeIntroTwoBoxIMG2} alt="advertises" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;

// libaraies
import styled from "styled-components";
// components
import SectionHomePicsSlider from "../../components/sectionHomePicsSlider/SectionHomePicsSlider";
// images
import TopImg from "./../../assets/images/Advertise/HomeTop.jpg";
import TopImg2 from "./../../assets/images/Advertise/TablighTop2.jpg";
import TopImg3 from "./../../assets/images/Advertise/TablighTop3.jpg";
// styles
const SectionS = styled.section`
  .top {
    width: 100%;
    margin-bottom: 10px;
    img {
      width: 100%;
      max-height: 75px;
      object-fit: cover;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      box-shadow: 0px 3px 10px -1px rgba(0, 0, 0, 0.2);
    }
  }
  .bottom {
    display: flex;
  }
  .right {
    flex: 66;
  }
  .left {
    flex: 33;
    .leftTop,
    .leftBottom {
      width: 100%;
      img {
        width: 100%;
        border-radius: 8px;
      }
    }
    .leftTop {
      margin-bottom: 10px;
    }
  }
`;
function SectionHomePics() {
  return (
    <SectionS>
      <div className="top">
        <img src={TopImg} alt="Advertise" />
      </div>
      <div className="bottom">
        <div className="right">
          <SectionHomePicsSlider />
        </div>
        <div className="left">
          <div className="leftTop">
            <img src={TopImg2} alt="Advertise" />
          </div>
          <div className="leftBottom">
            <img src={TopImg3} alt="Advertise" />
          </div>
        </div>
      </div>
    </SectionS>
  );
}

export default SectionHomePics;

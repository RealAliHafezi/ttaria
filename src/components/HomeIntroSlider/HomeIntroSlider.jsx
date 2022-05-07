// images
import { HomeIntroSliderImage } from "./HomeIntroSliderImages";
// swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import moduls required
import { FreeMode, Navigation, Thumbs } from "swiper";
// style
import "./HomeIntroSlider.css";
function HomeIntroSlider() {
  return (
    <Swiper
      className="HomeIntroSlider_mySwiper1"
      spaceBetween={10}
      navigation={true}
      // thumbs={{ swiper: thumbsSwiper }}
      modules={{ FreeMode, Navigation, Thumbs }}
    >
      {/* {HomeIntroSliderImage.length
        ? HomeIntroSliderImage.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))
        : null} */}
    </Swiper>
  );
}

export default HomeIntroSlider;

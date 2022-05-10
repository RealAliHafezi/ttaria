import { useRef, useState } from "react";
// images
import {
  HomeIntroSliderImage,
  HomeIntroSliderButton,
} from "./HomeIntroSliderImages";
// swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import "swiper/css/autoplay";

// import moduls required
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
// style
import "./HomeIntroSlider.css";
function HomeIntroSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        className="HomeIntroSlider_mySwiper1"
        slideToClickedSlide={true}
        centeredSlides={true}
        loop={false}
        speed={800}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          delay: 3500,
        }}
        spaceBetween={10}
        navigation={true}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      >
        {HomeIntroSliderImage.length &&
          HomeIntroSliderImage.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="Image Slider" />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        loop={false}
        className="HomeIntroSlider_mySwiper11"
        onSwiper={setThumbsSwiper}
        slideToClickedSlide={true}
        centeredSlides={true}
        spaceBetween={10}
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          961: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Thumbs, Autoplay]}
      >
        {HomeIntroSliderButton.length &&
          HomeIntroSliderButton.map((btn, index) => (
            <SwiperSlide key={index} className="HomeIntroSlider_mySwiper11_btn">
              <button>{btn}</button>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default HomeIntroSlider;

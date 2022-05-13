import { useRef } from "react";
// icons
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
// box
import CardHomeAmazingProduct from "../CardBoxes/CardHomeAmazingProduct/CardHomeAmazingProduct";
// swiper libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Lazy } from "swiper";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/bundle";
// style
import "./HomeAmazingProductSlider.css";
function HomeAmazingProductSlider() {
  const HomeAmazingProductSliderMySwiperPrevBtn = useRef(null);
  const HomeAmazingProductSliderMySwiperNextBtn = useRef(null);
  return (
    <Swiper
      style={{ width: "100%", height: "100%" }}
      spaceBetween={5}
      className="HomeAmazingProductSlider_mySwiper1"
      speed={500}
      navigation={{
        prevEl: HomeAmazingProductSliderMySwiperPrevBtn.current,
        nextEl: HomeAmazingProductSliderMySwiperNextBtn.current,
      }}
      onSwiper={(swiper) => {
        // Delay execution for the refs to be defined
        setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl =
            HomeAmazingProductSliderMySwiperPrevBtn.current;
          swiper.params.navigation.nextEl =
            HomeAmazingProductSliderMySwiperNextBtn.current;

          // Re-init navigation
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        });
      }}
      //   lazy={true}
      modules={[Navigation, Lazy]}
      breakpoints={{
        1060: {
          slidesPerView: 4,
        },
        830: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide className="HomeAmazingProductSlider_mySwiper1_slide">
        <CardHomeAmazingProduct />
      </SwiperSlide>
      <SwiperSlide>
        <CardHomeAmazingProduct />
      </SwiperSlide>
      <SwiperSlide>
        <CardHomeAmazingProduct />
      </SwiperSlide>
      <SwiperSlide>
        <CardHomeAmazingProduct />
      </SwiperSlide>
      <SwiperSlide>
        <CardHomeAmazingProduct />
      </SwiperSlide>
      <div
        ref={HomeAmazingProductSliderMySwiperNextBtn}
        className="HomeAmazingProductSlider_mySwiper1_Btn"
        style={{ left: "10px" }}
      >
        <MdArrowBackIosNew />
      </div>
      <div
        ref={HomeAmazingProductSliderMySwiperPrevBtn}
        className="HomeAmazingProductSlider_mySwiper1_Btn"
        style={{ right: "10px" }}
      >
        <MdArrowForwardIos />
      </div>
    </Swiper>
  );
}

export default HomeAmazingProductSlider;

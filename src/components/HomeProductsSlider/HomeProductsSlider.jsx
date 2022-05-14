import { useRef } from "react";
// icons
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
// swiper libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Lazy } from "swiper";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/bundle";
// components
import CardHomeProducts from "../CardBoxes/CardHomeProducts/CardHomeProducts";
// style
import "./HomeProductsSlider.css";
function HomeProductsSlider() {
  const HomeProductsSlider_mySwiper1_prevEl = useRef(null);
  const HomeProductsSlider_mySwiper1_nextEl = useRef(null);
  return (
    <Swiper
      style={{ width: "100%", height: "100%" }}
      className="HomeProductsSlider_mySwiper1"
      slidesPerView={5}
      speed={500}
      navigation={{
        prevEl: HomeProductsSlider_mySwiper1_prevEl,
        nextEl: HomeProductsSlider_mySwiper1_nextEl,
      }}
      onSwiper={(swiper) => {
        // Delay execution for the refs to be defined
        setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl =
            HomeProductsSlider_mySwiper1_prevEl.current;
          swiper.params.navigation.nextEl =
            HomeProductsSlider_mySwiper1_nextEl.current;

          // Re-init navigation
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        });
      }}
      modules={[Navigation, Lazy]}
      breakpoints={{
        1150: {
          slidesPerView: 5,
        },
        991: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        480: {
          slidesPerView: 2,
        },
        330: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>

      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>
      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>
      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>
      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>
      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>
      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>
      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>
      <SwiperSlide className="HomeProductsSlider_mySwiper1_slide">
        <CardHomeProducts />
      </SwiperSlide>
      <div
        ref={HomeProductsSlider_mySwiper1_nextEl}
        className="HomeProductsSlider_mySwiper1_btn"
        style={{ left: "10px" }}
      >
        <MdArrowBackIosNew />
      </div>
      <div
        ref={HomeProductsSlider_mySwiper1_prevEl}
        className="HomeProductsSlider_mySwiper1_btn"
        style={{ right: "10px" }}
      >
        <MdArrowForwardIos />
      </div>
    </Swiper>
  );
}

export default HomeProductsSlider;

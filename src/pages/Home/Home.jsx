// icons
import { FcPhoneAndroid } from "react-icons/fc";
import { BsApple, BsFillSpeakerFill } from "react-icons/bs";
import { IoWatch } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
// data
import { HomeAdvertiseImages } from "./../../sections/HomeAdvertise/HomeAdvertiseData";
import { MobileData } from "../../data/Mobile/AllMobileData";
// style
import "./Home.css";
// components
import Header from "../../sections/Header/Header";
import HomeIntro from "../../sections/HomeIntro/HomeIntro";
import HomeAmazingProduct from "../../sections/HomeAmazingProduct/HomeAmazingProduct";
import HomeImageMenu from "../../sections/HomeImageMenu/HomeImageMenu";
import HomeProducts from "../../sections/HomeProducts/HomeProducts";
import HomeAdvertise from "../../sections/HomeAdvertise/HomeAdvertise";
import HomeLastReading from "../../sections/HomeLastReading/HomeLastReading";
import HomeReading from "../../sections/HomeReading/HomeReading";
import Footer from "../../sections/Footer/Footer";
//
function Home() {
  const samsungMobiles = MobileData.filter((item) => item.filter === "samsung");
  const appleMobiles = MobileData.filter((item) => item.filter === "apple");
  const xiaomiMobiles = MobileData.filter((item) => item.filter === "xiaomi");
  const Speaker = MobileData.filter((item) => item.filter === "speaker");
  const Watch = MobileData.filter((item) => item.filter === "watch");
  const Offer = MobileData.filter((item) => item.data.off);
  return (
    <div className="Home">
      <Header />
      <div className="Home_Container">
        <HomeIntro />
        <HomeAmazingProduct products={Offer} />
        <HomeImageMenu />
        <HomeProducts
          icon={FcPhoneAndroid}
          products={samsungMobiles}
          title="موبایل سامسونگ"
        />
        <HomeProducts
          icon={BsApple}
          products={appleMobiles}
          title="موبایل آیفون"
        />
        <HomeProducts
          icon={FcPhoneAndroid}
          products={xiaomiMobiles}
          title="موبایل شیائومی"
        />
        <HomeAdvertise images={HomeAdvertiseImages.slice(0, 2)} />
        <HomeProducts
          icon={BsFillSpeakerFill}
          products={Speaker}
          title="اسپیکرها"
        />
        <HomeAdvertise images={HomeAdvertiseImages.slice(2, 4)} />
        <HomeProducts icon={IoWatch} products={Watch} title="ساعت هوشمند" />
        <HomeAdvertise images={HomeAdvertiseImages.slice(4, 6)} />
        <HomeLastReading icon={FaBook} title="آخرین خواندنی ها" />
        <HomeReading />
      </div>
      <Footer />
    </div>
  );
}
export default Home;

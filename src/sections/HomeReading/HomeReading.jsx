// data
import { HomeReadingData } from "./HomeReadingData";
// components
import HomeReadingBox from "../../components/HomeReadingBox/HomeReadingBox";
// style
import "./HomeReading.css";

function HomeReading() {
  return (
    <div className="HomeReading">
      {HomeReadingData.map((item, index) => (
        <HomeReadingBox card={item} key={index} />
      ))}
    </div>
  );
}

export default HomeReading;

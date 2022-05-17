// data
import { HomeLastReadingData } from "./HomeLastReadingData";
// components
import CardHomeLastReading from "../../components/CardBoxes/CardHomeLastReading/CardHomeLastReading";
// style
import "./HomeLastReading.css";

function HomeLastReading(props) {
  return (
    <div className="HomeLastReading">
      <div className="HomeLastReading_title">
        <span className="HomeLastReading_title_iconBox">
          <props.icon className="HomeLastReading_title_icon" />
        </span>
        <h3 className="HomeLastReading_title_text">{props.title}</h3>
      </div>
      <div className="HomeLastReading_cardsBox">
        {HomeLastReadingData.map((box, index) => (
          <CardHomeLastReading card={box} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HomeLastReading;

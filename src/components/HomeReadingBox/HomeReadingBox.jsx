import { useEffect, useRef } from "react";
// style
import "./HomeReadingBox.css";

function HomeReadingBox(props) {
  const ColorRef = useRef();
  useEffect(() => {
    if (props.card.color == "blue") {
      ColorRef.current.className = "HomeReadingBox_title_blue";
    } else if (props.card.color == "black") {
      ColorRef.current.className = "HomeReadingBox_title_black";
    }
  }, []);
  return (
    <div className="HomeReadingBox">
      <div className="HomeReadingBox_title">
        <h2 ref={ColorRef} className="">
          {props.card.title}
        </h2>
      </div>
      {props.card.image2 && (
        <div className="HomeReadingBox_imageBox">
          <img src={props.card.image2} alt="image" />
        </div>
      )}
      <div className="HomeRedaingBox_desc">{props.card.description}</div>
      {props.card.image && (
        <div className="HomeReadingBox_imageBox">
          <img src={props.card.image} alt="image" />
        </div>
      )}
    </div>
  );
}

export default HomeReadingBox;

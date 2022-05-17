//
// icons
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
// style
import "./CardHomeLastReading.css";
function CardHomeLastReading(props) {
  return (
    <div className="CardHomeLastReading">
      <div className="CardHomeLastReading_imageBox">
        <img src={props.card.image} alt="Image" />
      </div>
      <div className="CardHomeLastReading_desc">
        <h3 className="CardHomeLastReading_title">{props.card.title}</h3>
      </div>
      <div className="CardHomeLastReading_footer">
        <div className="CardHomeLastReading_footerItem">
          <span className="CardHomeLastReading_icon">
            <FaUserAlt />
          </span>
          <h6 className="CardHomeLastReading_writer">{props.card.writer}</h6>
        </div>
        <div className="CardHomeLastReading_footerItem CardHomeLastReading_date">
          <MdOutlineWatchLater />
          <h6 className="CardHomeLastReading_date">{props.card.date}</h6>
        </div>
      </div>
    </div>
  );
}

export default CardHomeLastReading;

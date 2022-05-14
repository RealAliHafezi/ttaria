// images
import { HomeImageMenuDataG } from "../../data/HomeImageMenu/HomeImageMenuData";
// styles
import "./HomeImageMenu.css";
function HomeImageMenu() {
  return (
    <div className="HomeImageMenu">
      <div className="HomeImageMenu_container">
        {HomeImageMenuDataG.length &&
          HomeImageMenuDataG.map((img, index) => (
            <div className="HomeImageMenu_imageBox" key={index}>
              <img src={img} alt="Image" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomeImageMenu;

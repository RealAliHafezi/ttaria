import { useDispatch, useSelector } from "react-redux";
// reducer from redux-toolkit
// style
import "./Home.css";
// components
import Header from "../../sections/Header/Header";
import HomeIntro from "../../sections/HomeIntro/HomeIntro";
import HomeAmazingProduct from "../../sections/HomeAmazingProduct/HomeAmazingProduct";
// style with styled-components

//
function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="Home_Container">
        <HomeIntro />
        <HomeAmazingProduct />
      </div>
    </div>
  );
}
export default Home;

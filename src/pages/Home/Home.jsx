// style
import "./Home.css";
// components
import Header from "../../sections/Header/Header";
import HomeIntro from "../../sections/HomeIntro/HomeIntro";
import HomeAmazingProduct from "../../sections/HomeAmazingProduct/HomeAmazingProduct";
import HomeImageMenu from "../../sections/HomeImageMenu/HomeImageMenu";
// style with styled-components

//
function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="Home_Container">
        <HomeIntro />
        <HomeAmazingProduct />
        <HomeImageMenu />
      </div>
    </div>
  );
}
export default Home;

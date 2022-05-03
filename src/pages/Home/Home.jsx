// style
import "./Home.css";
// components
import Header from "../../sections/Header/Header";
import HomeIntro from "../../sections/HomeIntro/HomeIntro";
//
function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="Home_Container">
        <HomeIntro />
      </div>
    </div>
  );
}
export default Home;

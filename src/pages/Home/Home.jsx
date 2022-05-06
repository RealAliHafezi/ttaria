import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// reducer from redux-toolkit
import { HideMenu } from "../../sections/Header/HeaderSlice";
// style
import "./Home.css";
// components
import Header from "../../sections/Header/Header";
import HomeIntro from "../../sections/HomeIntro/HomeIntro";
import HomeRandomItems from "../../sections/HomeRandomItems/HomeRandomItems";
// style with styled-components
const RightMenuDark = styled.div`
  opacity: ${(props) => (props.RightMenu ? "1" : "0")};
`;
//
function Home() {
  const dispatch = useDispatch();
  const RightMenu = useSelector((state) => state.ResponsiveMenu.ResponsiveMenu);
  return (
    <div className="Home">
      <Header />
      <div className="Home_Container">
        <HomeIntro />
        <HomeRandomItems />
      </div>
    </div>
  );
}
export default Home;

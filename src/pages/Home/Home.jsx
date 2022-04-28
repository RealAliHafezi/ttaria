// libraries
import styled from "styled-components";
// components
import Navbar from "../../sections/Navbar/Navbar";
import SectionHomePics from "../../sections/SectionHomePics/SectionHomePics";

const HomeS = styled.div`
  .Main {
    padding: 0 20px;
  }
`;
function Home() {
  return (
    <HomeS>
      <Navbar />
      <div className="Main">
        <SectionHomePics />
      </div>
    </HomeS>
  );
}
export default Home;

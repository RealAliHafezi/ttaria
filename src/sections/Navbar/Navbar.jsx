// libraries
import styled from "styled-components";
//
import NavbarBase from "../../components/Navbar/NavbarBase";
import NavbarTop from "../../components/Navbar/NavbarTop";
import NavbarBottom from "../../components/Navbar/NavbarBottom";
// styles
const NavbarS = styled.div`
  /* position: relative;
  margin-bottom: 500px; */
  margin-bottom: 150px;
`;
function Navbar() {
  return (
    <>
      <NavbarS>
        <NavbarTop />
        <NavbarBase />
        <NavbarBottom />
      </NavbarS>
    </>
  );
}

export default Navbar;

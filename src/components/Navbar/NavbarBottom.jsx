// libraries
import styled from "styled-components";
import { useEffect, useRef } from "react";
// icons
import { GoThreeBars } from "react-icons/go";
import { BsPhoneFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaMemory, FaLaptop, FaBomb, FaBook } from "react-icons/fa";

// data
const menuData = [
  {
    text: "دسته بندی کالا ها",
    icon: <GoThreeBars className="icons" />,
  },
  {
    text: "گوشی موبایل",
    icon: <BsPhoneFill className="icons" />,
  },
  {
    text: "لپ تاپ",
    icon: <FaLaptop className="icons" />,
  },
  {
    text: "قطعات کامپیوتر",
    icon: <FaMemory className="icons" />,
  },
  {
    text: "فروش ویژه",
    icon: <FaBomb className="icons" />,
  },
  { text: "مقالات", icon: <FaBook className="icons" /> },
  { text: "درباره ما", icon: <BsFillTelephoneFill className="icons" /> },
  { text: "تماس با ما", icon: <BsFillTelephoneFill className="icons" /> },
];
// styles
const NavbarBottomS = styled.div`
  /* position: absolute; */
  /* top: 100%; */
  /* left: 0; */
  /* right: 0; */
  padding: 20px 15px;
  background-color: var(--background);
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 3px 10px -1px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
  z-index: -1;
  .menuList {
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .menuItem {
    display: flex;
    align-items: center;
    cursor: pointer;
    :not(:last-child) {
      margin-left: 15px;
    }
    :not(:first-child) {
      .icons {
        color: var(--red);
      }
    }
    span {
      font-size: 14px;
      font-weight: 600;
      margin-right: 5px;
      transition: all 0.2s;
    }
    :hover {
      span {
        color: var(--primary);
      }
      :first-child {
        .icons {
          color: var(--primary);
        }
      }
    }
  }
`;
function NavbarBottom() {
  const navRef = useRef();
  // for navbar scroll
  useEffect(() => {
    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop);
      if (scrollTop > lastScrollTop) {
        // navRef.current.style.top = "-40px";
        // navRef.current.style.top = "105px";
        navRef.current.style.transform = "translateY(-100%)";
      } else {
        // navRef.current.style.top = "100%";
        navRef.current.style.transform = "translateY(0)";
      }
      lastScrollTop = scrollTop;
    });
  }, [window.scrollY]);
  return (
    <NavbarBottomS ref={navRef}>
      <ul className="menuList">
        {/* menuData is here . in top page */}
        {menuData.map((item, index) => {
          return (
            <li key={index} className="menuItem">
              {item.icon}
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </NavbarBottomS>
  );
}

export default NavbarBottom;

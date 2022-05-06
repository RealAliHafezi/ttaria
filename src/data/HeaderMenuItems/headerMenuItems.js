// icons
import { BsPhoneFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaMemory, FaLaptop, FaBomb, FaBook } from "react-icons/fa";
//
export const HeaderMenuItems = [
  {
    text: "گوشی موبایل",
    icon: <BsPhoneFill className="header_bottom_menuListItem_icon" />,
  },
  {
    text: "لپ تاپ",
    icon: <FaLaptop className="header_bottom_menuListItem_icon" />,
  },
  {
    text: "قطعات کامپیوتر",
    icon: <FaMemory className="header_bottom_menuListItem_icon" />,
  },
  {
    text: "فروش ویژه",
    icon: <FaBomb className="header_bottom_menuListItem_icon" />,
  },
  {
    text: "مقالات",
    icon: <FaBook className="header_bottom_menuListItem_icon" />,
  },
  {
    text: "درباره ما",
    icon: <BsFillTelephoneFill className="header_bottom_menuListItem_icon" />,
  },
  {
    text: "تماس با ما",
    icon: <BsFillTelephoneFill className="header_bottom_menuListItem_icon" />,
  },
];

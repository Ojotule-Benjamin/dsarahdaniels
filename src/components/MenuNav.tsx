import React from "react";
import { menuNav } from "../data";
import { MenuProps } from "../interfaces/global.interface";
import { Link } from "react-router-dom";
import {
  FacebookIconSvg,
  InstagramIconSvg,
  TwitterIconSvg,
} from "../assets/svgs/icons";

const MenuNav: React.FC<MenuProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <ul
      className={`absolute top-24 left-0 px-3 md:px-11 lg:hidden w-3/4 z-20 bg-red-700 ${
        menuOpen ? "" : ""
      }`}
      style={{ height: "calc(100vh - 96px)" }}
      //className="w-1/2 h-auto flex flex-col items-center gap-5 font-sanchez font-normal text-lg text-color-textColor bg-red-700 xs:hidden z-10 relative left-0 right-0 top-0"
    >
      {menuNav.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>{item.label}</Link>
        </li>
      ))}

      <div className="flex items-center gap-7 xs:hidden">
        <a href="www.facebook.com" target={"_blank"} rel="noreferrer">
          <FacebookIconSvg />
        </a>
        <a href="www.facebook.com">
          <InstagramIconSvg />
        </a>
        <a href="www.facebook.com">
          <TwitterIconSvg />
        </a>
      </div>
    </ul>
  );
};

export default MenuNav;

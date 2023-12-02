import React, { useState } from "react";
import { MenuProps } from "../interfaces/global.interface";
import { Link } from "react-router-dom";
import {
  FacebookIconSvg,
  InstagramIconSvg,
  TwitterIconSvg,
} from "../assets/svgs/icons";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuNav } from "../data";

const MenuNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex lg:hidden">
        {menuOpen ? (
          <CloseIcon onClick={() => setMenuOpen(false)} />
        ) : (
          <MenuIcon onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {menuOpen && (
        <div className="fixed w-full h-screen flex lg:hidden bg-green-500 left-0 top-28 duration-700 ease-out">
          <ul className=" w-full h-full flex flex-col items-center justify-center gap-5 font-sanchez font-normal text-lg text-white">
            {menuNav.map((item, index) => (
              <li key={index}>
                <Link to={item.link} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="flex items-center justify-center gap-7">
              <a href="www.facebook.com" target="_blank" rel="noreferrer">
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
        </div>
      )}
    </div>
  );
};

export default MenuNav;

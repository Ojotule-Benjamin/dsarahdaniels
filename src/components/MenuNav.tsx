import React, { useState } from "react";
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

  const handleNavigation = () => {
    window.scroll(0, 0);
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="flex lg:hidden">
        {menuOpen ? (
          <CloseIcon onClick={() => setMenuOpen(false)} />
        ) : (
          <MenuIcon onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* modal display */}

      {menuOpen && (
        <div className="fixed w-full h-screen flex lg:hidden bg-primaryColorBlue left-0 top-28 duration-500 ease-out">
          <ul className=" w-full h-full flex flex-col items-center justify-center gap-5 font-sanchez font-normal text-2xl text-white ">
            {menuNav.map((item, index) => (
              <li key={index} className=" hover:border-b-4">
                <Link to={item.link} onClick={handleNavigation}>
                  {item.label}
                </Link>
              </li>
            ))}
            <div className=" w-full flex items-center justify-center gap-7 ">
              <Link to={"http://www.google.com"}>
                <FacebookIconSvg />
              </Link>

              <Link to={"http://www.google.com"}>
                <InstagramIconSvg />
              </Link>
              <Link to={"http://www.google.com"}>
                <TwitterIconSvg />
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuNav;

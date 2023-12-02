import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookIconSvg,
  InstagramIconSvg,
  TwitterIconSvg,
} from "../assets/svgs/icons";
import { menuNav } from "../data";
import { menuNavItems } from "../interfaces/global.interface";
import logo from "../assets/svgs/logo.svg";
import MenuNav from "./MenuNav";

const Navbar = () => {
  return (
    <div className="w-full h-28 lg:h-40 flex items-center justify-between px-5 xs:px-16 fixed top-0 bg-white z-50">
      <img
        src={logo}
        alt="logo"
        className="w-28 lg:w-56 h-full object-cover xs:object-cover"
      />

      <ul className="hidden lg:flex items-center gap-5 font-sanchez font-normal text-lg text-color-textColor">
        {menuNav.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex items-center gap-7">
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

      {/* mobile view */}
      <MenuNav />
    </div>
  );
};

export default Navbar;

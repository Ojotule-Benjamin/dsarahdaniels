import React from "react";
import {
  FacebookIconSvg,
  InstagramIconSvg,
  TwitterIconSvg,
} from "../assets/svgs/icons";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-36 px-16">
      <div className=" w-56  h-36 flex items-center justify-center ">
        <img src={Logo} alt="logo" className=" w-56 h-36 object-cover" />
      </div>
      <ul className="flex items-center gap-5 font-sanchez font-normal text-lg text-color-textColor">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/enquiry">Enquiry</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>

      <div className="flex items-center gap-7">
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
      <MenuIcon />
    </div>
  );
};

export default Navbar;

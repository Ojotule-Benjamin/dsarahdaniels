import React from "react";
import {
  DsarahDanielsLogo,
  FacebookIconSvg,
  InstagramIconSvg,
  TwitterIconSvg,
} from "../assets/svgs/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-40 px-16 border border-red-600 bg-green-700">
      <div className="">
        <DsarahDanielsLogo />
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
        <FacebookIconSvg />
        <InstagramIconSvg />
        <TwitterIconSvg />
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import {
  FacebookIconSvg,
  InstagramIconSvg,
  TwitterIconSvg,
} from "../assets/svgs/icons";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/Logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavModal from "./NavModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };
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
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/services">
            Services
            <KeyboardArrowDownIcon style={{ fontSize: "16px" }} />
          </Link>
          {isModalOpen ? <NavModal /> : null}
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
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer = () => {
  return (
    <div className="w-full h-80 flex flex-col items-center justify-center gap-4 bg-[#A6A6A6] relative bottom-0 top-screen">
      <div className=" flex flex-col items-center justify-center font-sacramento text-3xl text-color-text-brand font-normal ">
        <h1>Dsarahdaniels_brand</h1>
        <h1>Event Planner</h1>
      </div>

      <ul className="flex items-center gap-10 font-playfairDisplay font-normal text-xs text-white">
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

      <div className="flex items-center gap-7 text-white">
        <FacebookRoundedIcon />
        <InstagramIcon />
        <TwitterIcon />
        <WhatsAppIcon />
      </div>

      <div className="flex items-center justify-center font-playfairDisplay font-normal text-xs">
        <LocationOnOutlinedIcon className="text-white" />
        <p className="pl-3 text-white">Suit c31 Emmauel Plaza Utako, Abuja</p>
      </div>

      <div className="font-playfairDisplay font-normal text-xs text-white">
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <span>Dsarahdaniels, INC. ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
};

export default Footer;

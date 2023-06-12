import React, { useState } from "react";
import {
  FacebookIconSvg,
  InstagramIconSvg,
  TwitterIconSvg,
} from "../assets/svgs/icons";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuNav } from "../data";
import { menuNavItems, NavbarProps } from "../interfaces/global.interface";
import { Hidden } from "@mui/material";

const Navbar: React.FC<NavbarProps> = ({
  menuOpen,
  setMenuOpen,
  toggleMenu,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelected = (id: string) => {
    setSelected(id);
  };

  // const menuNav: menuNavItems[] = [
  //   {
  //     id: "home",
  //     label: "Home",
  //     link: "/",
  //   },
  //   {
  //     id: "about",
  //     label: "About",
  //     link: "/about",
  //   },
  //   {
  //     id: "services",
  //     label: "Services",
  //     link: "/services",
  //   },
  //   {
  //     id: "events",
  //     label: "Events",
  //     link: "/events",
  //   },
  //   {
  //     id: "enquiry",
  //     label: "Enquiry",
  //     link: "/enquiry",
  //   },
  //   {
  //     id: "blog",
  //     label: "Blog",
  //     link: "/blog",
  //   },
  //   {
  //     id: "shop",
  //     label: "Shop",
  //     link: "/shop",
  //   },
  // ];

  return (
    <div className="w-full h-24 xs:h-36 flex  items-center  justify-between px-5 xs:px-16">
      <div className=" w-32 h-24 xs:w-56 xs:h-36 flex items-center justify-center ">
        <img
          src={Logo}
          alt="logo"
          className=" w-32 h-24 xs:w-56 xs:h-36 object-cover xs:object-cover"
        />
      </div>
      <ul className="xs:flex items-center gap-5 font-sanchez font-normal text-lg text-color-textColor hidden ">
        {menuNav.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* <ul className="xs:flex items-center gap-5 font-sanchez font-normal text-lg text-color-textColor hidden ">
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
      </ul> */}

      <div className="xs:flex items-center gap-7 hidden">
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

      <div className="xs:hidden " onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Navbar;

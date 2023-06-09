import React from "react";
import { IHeaderProps } from "../interfaces/global.interface";

const Header: React.FC<IHeaderProps> = ({ header }) => {
  return (
    <div className=" w-full h-24 flex items-center justify-center font-playfairDisplay font-normal text-5xl text-primaryColorBlue">
      <h1>{header}</h1>
    </div>
  );
};

export default Header;

import React from "react";
import hero1 from "../assets/svgs/hero1.svg";

const Hero = () => {
  return (
    <div className=" w-full h-[calc(100vh-7rem )] lg:h-[calc(100vh-10rem)] ">
      <img src={hero1} alt="" className=" w-full h-full object-cover" />
      {/* <div className=" w-full h-full bg-orange-700">hell</div> */}
    </div>
  );
};

export default Hero;

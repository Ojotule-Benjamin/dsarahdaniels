import React from "react";
import { MeetCreativeDirectorProps } from "../interfaces/global.interface";

const MeetCreativeDirector: React.FC<MeetCreativeDirectorProps> = ({
  img,
  title,
  desc,
  subTitle,
  button,
  generalClassName,
  descClassName,
}) => {
  return (
    <div
      className={`w-full h-auto bg-white md:flex-col lg:flex-row flex items-center justify-center flex-col my-10 xs:flex-row px-0 md:px-20 py-10 lg:py-20`}
    >
      {/* right */}
      <div className=" w-full h-[400px] lg:h-[500px] lg:w-1/2 flex items-center justify-center">
        {/* hello */}
        <img
          className=" w-80 md:w-full lg:w-full h-[400px] lg:h-[500px] object-cover md:object-contain lg:object-cover rounded-xl xs:rounded-none"
          src={img}
          alt="creative director"
        />
      </div>
      {/* left */}
      <div className=" w-full lg:w-1/2 h-full flex items-center justify-center ">
        <div
          className={`w-full h-auto flex flex-col items-center justify-start lg:items-center lg:justify-center border-0 lg:border-[20px] lg:border-l-0 border-borderColor  ${generalClassName}`}
        >
          <h1 className="font-playfairDisplay font-medium text-primaryColorBlue text-2xl lg:text-4xl ">
            {title}
          </h1>
          <p
            className={`font-playfairDisplay font-medium text-textColorBlack text-xs md:text-base lg:text-sm leading-5 text-justify ${descClassName}`}
          >
            {desc}
          </p>
          <div>
            <h1 className="font-playfairDisplay font-medium text-[#F1C36D] text-xl text-center">
              {subTitle}
            </h1>
          </div>
          {button}
        </div>
      </div>
    </div>
  );
};

export default MeetCreativeDirector;

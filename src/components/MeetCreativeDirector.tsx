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
      className={`w-full h-auto bg-white md:flex-col lg:flex-row flex items-center justify-center flex-col my-10 xs:flex-row px-0 lg:px-16`}
    >
      {/* right */}
      <div className=" w-full lg:w-1/2 h-full flex items-center justify-center z-20">
        <img
          className="w-80 md:w-full h-96 object-cover md:object-contain lg:object-contain rounded-xl xs:rounded-none"
          //className="w-full h-80 xs:w-[560px] xs:h-[400px] rounded-xl xs:rounded-none object-contain"
          src={img}
          alt="creative director"
        />
      </div>
      {/* left */}
      <div className=" w-full lg:w-1/2 h-full flex items-center justify-center ">
        <div
          className={`w-full lg:-ml-56 flex flex-col items-center justify-start lg:items-center lg:justify-center border-0 lg:border-[20px] lg:border-l-0 border-borderColor  ${generalClassName}`}
        >
          <h1 className="font-playfairDisplay font-medium text-primaryColorBlue text-2xl lg:text-4xl ">
            {title}
          </h1>
          <p
            className={`font-playfairDisplay font-medium text-textColorBlack text-sm md:text-base lg:text-sm text-center ${descClassName}`}
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
      {/* <div className="  w-full h-40 lg:w-1/2 lg:h-96 flex items-center justify-center relative">
        <div
          className={`w-full bg-teal-600 lg:w-1/2 h-auto md:h-[360px] px-4 md:px-40 lg:px-8 flex flex-col gap-2 lg:gap-4 lg:border-[20px] border-l-0 border-borderColor  ${generalClassName}`}
        >
          <h1 className="font-playfairDisplay font-medium text-primaryColorBlue text-2xl lg:text-4xl ">
            {title}
          </h1>
          <p
            className={`font-playfairDisplay font-medium text-textColorBlack text-sm md:text-base lg:text-sm text-center ${descClassName}`}
          >
            {desc}
          </p>
          <div>
            <h1 className="font-playfairDisplay font-medium text-[#F1C36D] text-xl text-center">
              {subTitle}
            </h1>
            <p className="font-playfairDisplay font-normal text-primaryColorBlue text-[10px] text-center">
              CEO Sarah Daniels
            </p>
          </div>

          {button}
        </div>
      </div> */}
    </div>
  );
};

export default MeetCreativeDirector;

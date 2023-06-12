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
      className={`w-full  bg-white flex-1 flex items-center justify-center gap-4 xs:gap-0 py-5 xs:py-10 flex-col xs:flex-row px-5 xs:px-16`}
    >
      <div className=" w-full h-96 xs:w-[560px] xs:max-h-[400px] flex flex-[0.4] items-center justify-center">
        <img
          className="w-[304px] h-96 xs:w-[560px] xs:h-[400px] rounded-xl xs:rounded-none object-cover"
          src={img}
          alt="creative director"
        />
      </div>
      <div
        className={`w-full xs:w-1/2 xs:h-[350px]  flex flex-[0.5] flex-col items-center justify-center gap-2 xs:gap-4  xs:border-[20px] xs:border-l-0 border-borderColor  ${generalClassName}`}
      >
        <h1 className="font-playfairDisplay font-medium text-primaryColorBlue text-2xl xs:text-4xl text-center">
          {title}
        </h1>

        <p
          className={`font-playfairDisplay font-medium text-textColorBlack text-xs leading-4 xs:leading-6  text-center ${descClassName}`}
        >
          {desc}
        </p>
        <h1 className="font-playfairDisplay font-medium text-[#F1C36D] text-xl text-center">
          {subTitle}
        </h1>
        {button}
      </div>
    </div>
  );
};

export default MeetCreativeDirector;

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
    <div className={`w-full  bg-white flex-1 flex items-center py-10 px-16`}>
      <div className="w-[560px] max-h-[500px] ">
        <img
          className="w-[560px] h-[500px] object-cover"
          src={img}
          alt="creative director"
        />
      </div>
      <div
        className={`w-1/2 h-[400px]  flex flex-col items-center justify-center gap-4 p-5 border-[20px] border-l-0 border-borderColor  ${generalClassName}`}
      >
        <h1 className="font-playfairDisplay font-medium text-primaryColorBlue text-4xl text-center">
          {title}
        </h1>

        <p
          className={`font-playfairDisplay font-medium text-textColorBlack text-xs text-center ${descClassName}`}
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

import React from "react";
//import creativeDirector from "../assets/imgs/creativeDirector.png";
import creativeDirector from "../assets/svgs/creativeDirector.svg";
import Frame from "../assets/imgs/Frame.png";
import CustomButton from "./CustomButton";

const MeetCreativeDirector = () => {
  return (
    <div className="w-full flex-1  bg-white flex items-center py-10 px-16">
      <div className="w-[560px] max-h-[500px]">
        <img
          className="w-full h-[500px] object-cover"
          src={creativeDirector}
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col items-center gap-4 p-5 border-[20px] border-l-0 border-[#9E9494]">
        <h1 className="font-playfairDisplay font-medium text-[#094257] text-4xl text-center">
          Meet Our Creative Director
        </h1>

        <p className="font-playfairDisplay font-medium text-[#1A1A1A] leading-6 text-xs text-center">
          I'm Sarah Daniel, the creative designer behind the brand. With a
          passion for design and a love for celebrations, I specialize in
          creating unique and personalized events that leave a lasting
          impression. From the initial concept to the final details, I work
          closely with my clients to ensure their vision is brought to life in
          every aspect of the event. Whether it's a wedding, corporate event, or
          private celebration, I believe that every occasion deserves a touch of
          creativity and a hint of magic. Join me on this journey of event
          planning and design, and let's create unforgettable memories together
        </p>
        <h1 className="font-playfairDisplay font-medium text-[#F1C36D] text-xl text-center">
          Sarah Daniels
        </h1>
        <CustomButton text="Connect" className="bg-[#F0EDE8] " />
      </div>
    </div>
  );
};

export default MeetCreativeDirector;

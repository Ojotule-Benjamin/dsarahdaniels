import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import carousel_1 from "../assets/imgs/carousel_1.png";

const AboutUs = () => {
  return (
    <div className="w-full h-auto xs:h-full gap-4 xs:gap-8 flex flex-1 items-center justify-center flex-col lg:flex-row px-5 xs:px-16 py-10 lg:py-16 bg-secondaryColorLight">
      <div className="w-full h-[248px] xs:w-[560px] xs:h-[374px] flex items-center justify-center flex-[0.5]">
        {/* TODO: sort out edge cases, alternatives when there is no network */}
        {/* <img src={carousel_1} alt="" /> */}
        <iframe
          width="560"
          height="374"
          src="https://www.youtube.com/embed/A83_TxPAEb4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="flex flex-[0.5] flex-col items-center gap-2 xs:gap-4 ">
        <h1 className="font-playfairDisplay font-medium text-primaryColorBlue text-2xl xs:text-4xl text-center lg:text-start">
          Embark on a Captivating Event Experience
        </h1>
        <h3 className="font-playfairDisplay font-medium text-primaryColorBlue text-xs lg:text-xl text-center lg:text-start">
          Dsarah Daniels Events is not just an event planning company, it's a
          creative journey that celebrates your unique story.
        </h3>
        <p className="font-playfairDisplay font-medium text-textColorBlack text-sm leading-5 text-justify lg:text-justify">
          At Dsarah Daniels Events, we understand the power of storytelling and
          the impact it has on evoking emotions and creating lasting memories.
          We strive to create an interactive experience for you and your guests
          that celebrates who you are and what makes your event truly special.
          Our team is dedicated to delivering exceptional service and attention
          to detail to make sure your event planning journey is stress-free and
          enjoyable. Let us help you create a celebration that tells your unique
          story and leaves a lasting impression on your guests. Contact us today
          to start planning your unforgettable event.
        </p>
        <Link to="/about">
          <CustomButton
            text="Learn more"
            className=" bg-white w-20 h-5 xs:w-32 xs:h-9 text-[7px] xs:text-sm"
          />
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full h-[563px] bg-[#F0EDE8] gap-8 flex items-center px-16 ">
      <div className="w-full h-[374px] border">
        {/* TODO: sort out edge cases, alternatives when there is no network */}
        <iframe
          width="560"
          height="374"
          src="https://www.youtube.com/embed/A83_TxPAEb4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-playfairDisplay font-medium text-[#094257] text-4xl text-center">
          Embark on a Captivating Event Experience
        </h1>
        <h3 className="font-playfairDisplay font-medium text-[#094257] text-xl text-center">
          Dsarah Daniels Events is not just an event planning company, it's a
          creative journey that celebrates your unique story.
        </h3>
        <p className="font-playfairDisplay font-medium text-[#1A1A1A] text-xs leading-6  text-center">
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
          <CustomButton text="Learn more" className=" bg-white" />
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

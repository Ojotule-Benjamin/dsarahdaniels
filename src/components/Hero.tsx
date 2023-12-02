import React, { useEffect, useState } from "react";
import hero1 from "../assets/svgs/hero1.svg";
import carousel_1 from "../assets/imgs/carousel_1.png";
import carousel_2 from "../assets/imgs/carousel_2.png";
import carousel_3 from "../assets/imgs/carousel_3.png";

type carouselImagesProps = {
  id: number;
  img: string;
};

const carouselImages = [
  {
    id: 0,
    img: carousel_1,
  },
  {
    id: 1,
    img: hero1,
  },
  {
    id: 3,
    img: carousel_2,
  },
  {
    id: 4,
    img: carousel_3,
  },
];

const Hero = () => {
  const [curreniImgSlide, setCurrentImgSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentImgSlide((prev) =>
          prev === carouselImages.length - 1 ? 0 : prev + 1
        ),
      5000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" w-full h-[calc(100vh-7rem)] lg:h-[calc(100vh-10rem)] relative">
      <div className="w-full h-full ">
        <img
          src={carouselImages[curreniImgSlide].img}
          alt=""
          className=" w-full h-full object-cover "
        />
      </div>
      <div className="w-[90%] h-4/5 flex flex-col items-center justify-center lg:items-start lg:justify-start p-3 lg:p-20 opacity-90 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 right-0 ">
        <h3 className="font-playfairDisplay font-medium text-primaryColorBlue text-2xl lg:text-4xl text-center lg:text-start mb-3 lg:mb-5">
          We Bring Your Events To Life
        </h3>
        <p className="font-playfairDisplay font-medium text-textColorBlack text-sm leading-3 lg:leading-7 text-center lg:text-start">
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
      </div>
    </div>
  );
};

export default Hero;

import React, { useState, useEffect } from "react";
// import { CarouselSectionProps } from "../interfaces/global.interface";
import { Swiper } from "swiper/react";
import hero1 from "../assets/svgs/hero1.svg";
import hero2 from "../assets/svgs/hero2.svg";
import "../App.css";

const carouselImages = [
  {
    id: 0,
    img: hero1,
  },
  {
    id: 1,
    img: hero2,
  },
];

type CarouselSectionProps = {
  id: number;
  img: string;
};
const CarouselSection: React.FC<CarouselSectionProps> = () => {
  const [currentImgSlide, setCurrentImgSlide] = useState<number>(0);

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
    <div
      className="w-full "
      //style={{ height: "calc(100vh - 144px)" }}
    >
      <div className="w-full flex items-center ">
        <img src={hero1} alt="" />
        {/* <img
          sizes="85"
          loading="lazy"
          src={carouselImages[currentImgSlide].img}
          alt=""
          className="w-full object-contain xs:object-cover md:h-[calc(100vh/2)] lg:h-[calc(100vh-144px)]"
          //className={`w-full object-contain xs:object-cover `}
          //style={{ height: "calc(100vh - 144px" }}
        /> */}
      </div>
    </div>
  );
};

export default CarouselSection;

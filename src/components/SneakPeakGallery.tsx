import React from "react";
import CustomButton from "./CustomButton";
import { IsneakPeakImages } from "../interfaces/global.interface";
import { Link } from "react-router-dom";

const sneakPeakImages: IsneakPeakImages[] = [
  {
    id: 1,
    img: require("../assets/imgs/sneakPeak1.png"),
    alt: "first slide",
  },
  {
    id: 2,
    img: require("../assets/imgs/sneakPeak2.png"),
    alt: "second slide",
  },
  {
    id: 3,
    img: require("../assets/imgs/sneakPeak3.png"),
    alt: "third slide",
  },
  {
    id: 4,
    img: require("../assets/imgs/sneakPeak4.png"),
    alt: "fourth slide",
  },
  {
    id: 5,
    img: require("../assets/imgs/sneakPeak5.png"),
    alt: "fifth slide",
  },
];

const SneakPeakGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-playfairDisplay font-medium text-4xl text-[#094257] ">
        Sneak Peak At Our Gallery
      </h1>
      <div className="w-screen flex items-center  justify-center gap-2 flex-wrap py-10">
        {sneakPeakImages.map((item, index) => (
          <img
            src={item.img}
            alt={item.alt}
            className="w-[400px] h-[400px] object-cover"
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-5 px-60 my-5">
        <p className="font-playfairDisplay font-normal text-lg text-[#9E9494] text-center px-5">
          Let’s connect so I can listen to your wishes, understand your dreams
          and meet your expectations because my goal is always to bring joy and
          create everlasting memories for you and every one of your guests.
        </p>
        <h1 className="font-playfairDisplay font-medium text-[#F1C36D] text-xl text-center">
          Sarah Daniels
        </h1>
        <Link to="/events">
          <CustomButton text="More events" className=" bg-[#F0EDE8] " />
        </Link>
      </div>
    </div>
  );
};

export default SneakPeakGallery;

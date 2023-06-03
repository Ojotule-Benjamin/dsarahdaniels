import React from "react";
import Hero from "../../components/Hero";
import carouseImage1 from "../../assets/svgs/carouseImage1.svg";
import carouseImage2 from "../../assets/svgs/carouseImage2.svg";
import carouseImage3 from "../../assets/svgs/carouseImage3.svg";
import CarouselSection from "../../components/CarouselSection";
import { Images } from "../../interfaces/global.interface";

const images: Images[] = [
  { src: carouseImage1, alt: "First slide" },
  { src: carouseImage2, alt: "Second slide" },
  { src: carouseImage3, alt: "Third slide" },
];

const Home = () => {
  return (
    <div className="bg-red-400">
      <CarouselSection images={images} title="About Us And We Do" />
    </div>
  );
};

export default Home;

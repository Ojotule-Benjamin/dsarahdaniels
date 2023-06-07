import React from "react";
import AboutUs from "../../components/AboutUs";
import CarouselSection from "../../components/CarouselSection";
import MeetCreativeDirector from "../../components/MeetCreativeDirector";
import SneakPeakGallery from "../../components/SneakPeakGaallery";
import GetUpdates from "../../components/GetUpdates";
import EventDetails from "../../components/EventDetails";
import { carouselImagesItems } from "../../interfaces/global.interface";

const Home = () => {
  const carouselImages: carouselImagesItems[] = [
    {
      id: 1,
      src: require("../../assets/imgs/carousel_1.png"),
      alt: "slide 1",
    },
    {
      id: 2,
      src: require("../../assets/imgs/carousel_2.png"),
      alt: "slide 2",
    },
    {
      id: 3,
      src: require("../../assets/imgs/carousel_3.png"),
      alt: "slide 3",
    },
  ];

  return (
    <div className="">
      <CarouselSection carouselImages={carouselImages} />
      <AboutUs />
      <MeetCreativeDirector />
      <SneakPeakGallery />
      <EventDetails />
      <GetUpdates />
    </div>
  );
};

export default Home;

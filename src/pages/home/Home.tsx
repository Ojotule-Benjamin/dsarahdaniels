import React from "react";
import CustomButton from "../../components/CustomButton";
import AboutUs from "../../components/AboutUs";
import CarouselSection from "../../components/CarouselSection";
import MeetCreativeDirector from "../../components/MeetCreativeDirector";
import SneakPeakGallery from "../../components/SneakPeakGallery";
import GetUpdates from "../../components/GetUpdates";
import EventDetails from "../../components/EventDetails";
import { carouselImagesItems } from "../../interfaces/global.interface";
import creativeDirector from "../../assets/imgs/creativeDirector.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/enquiry");
  };
  const carouselImages: carouselImagesItems[] = [
    {
      id: 1,
      src: require("../../assets/imgs/carousel_1.png"),
      //src: require("../../assets/imgs/sneakPeak2.png"),
      alt: "slide 1",
    },
    // {
    //   id: 2,
    //   src: require("../../assets/imgs/carousel_2.png"),
    //   //src: require("../../assets/imgs/sneakPeak3.png"),
    //   alt: "slide 2",
    // },
    // {
    //   id: 3,
    //   src: require("../../assets/imgs/carousel_3.png"),
    //   //src: require("../../assets/imgs/sneakPeak5.png"),
    //   alt: "slide 3",
    // },
  ];

  return (
    <div className="">
      <CarouselSection carouselImages={carouselImages} />
      <AboutUs />
      <MeetCreativeDirector
        img={creativeDirector}
        desc=" I'm Sarah Daniel, the creative designer behind the brand. With a
        passion for design and a love for celebrations, I specialize in
        creating unique and personalized events that leave a lasting
        impression. From the initial concept to the final details, I work
        closely with my clients to ensure their vision is brought to life in
        every aspect of the event. Whether it's a wedding, corporate event, or
        private celebration, I believe that every occasion deserves a touch of
        creativity and a hint of magic. Join me on this journey of event
        planning and design, and let's create unforgettable memories together"
        title="Meet Our Creative Director"
        subTitle="Sarah Daniels"
        button={<CustomButton text="Connect" onClick={handleClick} />}
      />
      <SneakPeakGallery />
      <EventDetails />
      <GetUpdates />
    </div>
  );
};

export default Home;

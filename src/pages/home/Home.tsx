import React from "react";
import CustomButton from "../../components/CustomButton";
import AboutUs from "../../components/AboutUs";
import MeetCreativeDirector from "../../components/MeetCreativeDirector";
import SneakPeakGallery from "../../components/SneakPeakGallery";
import GetUpdates from "../../components/GetUpdates";
import EventDetails from "../../components/EventDetails";

import creativeDirector from "../../assets/imgs/creativeDirector.png";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/enquiry");
  };

  return (
    <div className=" ">
      <Hero />
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
        generalClassName=" h-96 lg:h-auto gap-2 lg:gap-5 p-4 lg:p-8"
        button={
          <CustomButton
            text="Connect"
            onClick={handleClick}
            className="w-20 h-5 xs:w-32 xs:h-9 text-xs "
          />
        }
      />
      <SneakPeakGallery />
      <EventDetails />
      <GetUpdates />
    </div>
  );
};

export default Home;

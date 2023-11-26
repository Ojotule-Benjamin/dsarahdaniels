import React from "react";
import Header from "../../components/Header";
import services_4 from "../../assets/imgs/services_4.png";
import GetUpdates from "../../components/GetUpdates";
import { servicesList } from "../../data";
import { servicesListItems } from "../../interfaces/global.interface";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import CarouselSection from "../../components/CarouselSection";

const Services = () => {
  const navigate = useNavigate();

  const handleClick = (item: servicesListItems, id: string) => {
    navigate(`/services/service/${id}`, { state: { item } });
  };

  return (
    <div>
      <Header
        header="Services"
        className="w-full h-12 lg:h-24 flex items-center justify-center font-playfairDisplay font-normal text-xl md:text-2xl lg:text-5xl text-primaryColorBlue"
      />
      <div className="px-4 lg:px-16">
        <img src={services_4} alt="" />
        {/* <CarouselSection carouselImages={aboutCarouselImgs} /> */}
        <h1 className=" font-playfairDisplay font-medium text-2xl lg:text-5xl text-primaryColorBlue text-center py-5">
          What We Do
        </h1>
        <div>
          <p className=" font-playfairDisplay font-normal text-center lg:text-justify text-base text-textColorBlack ">
            We understand that virtual events require just as much creativity,
            planning, and attention to detail as in-person gatherings. Our team
            is dedicated to delivering exceptional virtual event experiences,
            including unforgettable virtual birthday celebrations.We work
            closely with our clients to create personalized virtual event
            experiences that align with their vision and the celebrant's
            preferences.
          </p>
          <br />

          <p className=" font-playfairDisplay font-normal text-center lg:text-justify text-base text-textColorBlack pb-5">
            From interactive themes and custom backgrounds to virtual
            decorations and branding, we ensure a visually stunning and
            immersive experience.Our team handles all the technical aspects of
            setting up and managing the virtual event platform. We collaborate
            with reliable virtual event platforms and coordinate live streaming,
            attendee registration, and interactive features to ensure seamless
            connectivity and engagement.We curate an array of virtual
            entertainment options to keep guests entertained and engaged
            throughout the virtual birthday celebration.
          </p>
        </div>
      </div>
      <div className=" w-full px-4 md:px-16   py-5">
        {servicesList.map((item: servicesListItems, index: number) => (
          <div
            className={`flex flex-col flex-1 items-center gap-5 pb-20 lg:pb-10 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
            key={index}
          >
            <div className="w-full lg:w-1/2 h-80">
              <img
                className="w-full h-full object-cover"
                src={item.img}
                alt={item.service}
              />
            </div>
            <div className="w-full lg:w-1/2 p-0 lg:p-5 flex flex-col items-center justify-center gap-4">
              <h3 className=" font-playfairDisplay font-normal text-2xl lg:text-4xl text-primaryColorBlue">
                {item.service}
              </h3>
              <p className=" font-playfairDisplay font-normal text-base text-center lg:text-justify text-textColorBlack">
                {item.desc}
              </p>
              <CustomButton
                text="Read more"
                onClick={() => handleClick(item, `${item.id}`)}
              />
            </div>
          </div>
        ))}
      </div>
      <GetUpdates />
    </div>
  );
};

export default Services;

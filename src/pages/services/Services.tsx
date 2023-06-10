import React from "react";
import Header from "../../components/Header";
import services_4 from "../../assets/imgs/services_4.png";
import GetUpdates from "../../components/GetUpdates";
import { servicesList } from "../../data";
import { servicesListItems } from "../../interfaces/global.interface";

const Services = () => {
  return (
    <div>
      <Header header="Services" />
      <div className="px-16">
        <img src={services_4} alt="" />
        <h1 className=" font-playfairDisplay font-bold text-center text-primaryColorBlue text-2xl py-5">
          What We Do
        </h1>
        <p className=" font-playfairDisplay font-normal text-justify text-lg text-textColorBlack pb-5">
          We understand that virtual events require just as much creativity,
          planning, and attention to detail as in-person gatherings. Our team is
          dedicated to delivering exceptional virtual event experiences,
          including unforgettable virtual birthday celebrations.We work closely
          with our clients to create personalized virtual event experiences that
          align with their vision and the celebrant's preferences. From
          interactive themes and custom backgrounds to virtual decorations and
          branding, we ensure a visually stunning and immersive experience.Our
          team handles all the technical aspects of setting up and managing the
          virtual event platform. We collaborate with reliable virtual event
          platforms and coordinate live streaming, attendee registration, and
          interactive features to ensure seamless connectivity and engagement.We
          curate an array of virtual entertainment options to keep guests
          entertained and engaged throughout the virtual birthday celebration.
        </p>
      </div>
      <div className=" w-full px-16 py-5">
        {servicesList.map((item: servicesListItems, index: number) => (
          <div
            className={`flex  items-center gap-5  ${
              index % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
            key={index}
          >
            <div className="w-1/2 h-80">
              <img
                className=" h-full object-cover"
                src={item.img}
                alt={item.service}
              />
            </div>
            <div className="w-1/2 p-10 flex flex-col items-center justify-center gap-4">
              <h3 className=" font-playfairDisplay font-normal text-4xl text-primaryColorBlue">
                {item.service}
              </h3>
              <p className=" font-playfairDisplay font-normal text-sm text-justify text-textColorBlack">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <GetUpdates />
    </div>
  );
};

export default Services;

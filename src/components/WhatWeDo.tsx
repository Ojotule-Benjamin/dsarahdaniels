import React from "react";
import { IWhatWeDoItem } from "../interfaces/global.interface";
import CustomButton from "./CustomButton";

const WhatWeDo = () => {
  const whatWeDo: IWhatWeDoItem[] = [
    {
      id: 1,
      title: "Experience D’Sarah Daniels Touch ",
      desc: "We take an integrated approach to event planning and design. Our team of experts, led by Sarah Daniel, offers an abundance of knowledge and experience in every aspect of event production. We handle all logistical elements, from planning to production, and specialize in conceptual and visual event design. Our comprehensive approach allows us to create a seamless message that reflects your unique vision, while also reducing the number of vendors you need to communicate with. Let us handle every aspect of your event planning journey and bring your dream event to life",
      imgs: require("../assets/imgs/whatWeDo_2.png"),
    },
    {
      id: 2,
      title: "Are you ready to start planning your next unforgettable event?",
      desc: "At Dsarah Daniels, our true goal is to make you feel like a guest at your own celebration and to create an unforgettable experience for everyone who attends. Whether you're planning a grand gala or an intimate luxury wedding, our expert team led by Sarah Daniel will bring your vision to life with meticulous attention to detail and exceptional service. With our help, your dream event can become a reality that will leave a lasting impression on you and your guests. Let's create an experience that you'll cherish for years to come.",
      imgs: require("../assets/imgs/whatWeDo_1.png"),
    },
  ];
  return (
    <div className=" w-full h-full flex flex-col gap-5 mt-20 mb-10">
      {whatWeDo.map((item, index) => (
        <div
          key={index}
          className={`w-full h-auto flex-col flex flex-1 items-center gap-4 lg:gap-10 justify-center px-4 lg:px-16 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row "
          }`}
        >
          <div className="w-full h-96 flex items-center justify-center flex-1">
            <img
              src={item.imgs}
              alt={item.title}
              className=" w-72 h-72 md:w-96 md:h-96 lg:w-full lg:h-full object-cover object-center"
            />

            {/* <h1 className="w-full h-full">hello</h1> */}
          </div>
          <div className="w-full flex flex-1 flex-col">
            <h3 className=" text-primaryColorBlue font-playfairDisplay font-medium text-xl md:text-2xl lg:text-5xl text-center">
              {item.title}
            </h3>
            <p className=" font-playfairDisplay font-normal text-sm lg:text-base text-textColorBlack text-center lg:text-justify p-4">
              {item.desc}
            </p>
            <div className="flex items-center justify-center">
              {index === 1 && (
                <CustomButton
                  text="Get Started"
                  className="bg-secondaryColorLight text-textColorDarkGray border border-textColorDarkGray"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;

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
    <div className="mt-28">
      {whatWeDo.map((item, index) => (
        <div
          key={index}
          className={`w-full flex flex-1 items-center gap-10 justify-center py-5 px-16 ${
            index % 2 === 1 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className=" w-full flex-[0.5] h-[500px]" key={index}>
            <img
              src={item.imgs}
              alt={item.title}
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-[0.5] flex-col gap-4">
            <h3 className=" text-primaryColorBlue font-playfairDisplay font-medium text-5xl text-center">
              {item.title}
            </h3>
            <p className=" font-playfairDisplay font-normal text-base text-textColorBlack text-justify">
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

import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

const Service = () => {
  const location = useLocation();
  const { item } = location.state || {};

  return (
    <div>
      {item && (
        <div className=" ">
          <Header
            header={item.service}
            className="w-full h-12 lg:h-24 flex items-center justify-center font-playfairDisplay font-normal text-xl md:text-2xl lg:text-5xl text-primaryColorBlue"
          />
          <div className=" flex flex-col items-center justify-center">
            <div className=" w-full h-auto bg-red-600 mb-10">
              <img
                src={item.img}
                alt=""
                className="w-full  object-cover pb-10"
              />
            </div>
            <div className=" px-16">
              <p className=" font-playfairDisplay font-medium text-base text-textColorDarkGray text-justify">
                {item.desc}
              </p>
            </div>
            <h3 className=" font-playfairDisplay font-medium text-3xl text-primaryColorBlue text-center py-10">
              Services Rendered
            </h3>
            <div className="w-3/5 h-96 flex flex-col flex-wrap justify-center mb-10 relative">
              {item.servicesRendered.map((service: string, index: number) => (
                <div
                  key={index}
                  className="w-fit flex items-center justify-center flex-row font-playfairDisplay font-medium text-base text-textColorDarkGray border border-primaryColorBlue bg-secondaryColorLight rounded-lg m-2 px-4 py-2"
                >
                  {index + 1}. {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;

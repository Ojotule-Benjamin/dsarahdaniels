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
          <Header header={item.service} className=" text-5xl" />
          <div className="px-16 flex flex-col items-center justify-center">
            <div className=" w-full h-[568px] bg-red-600 mb-10">
              <img
                src={item.img}
                alt=""
                className="w-full  object-cover pb-10"
              />
            </div>
            <div>
              <p className=" font-playfairDisplay font-medium text-xl text-textColorDarkGray text-justify">
                {item.desc}
              </p>
              <h3 className=" font-playfairDisplay font-medium text-3xl text-primaryColorBlue text-center py-10">
                Services Rendered
              </h3>
            </div>
            <div className="flex flex-wrap justify-center mb-10">
              {item.servicesRendered.map((service: string, index: number) => (
                <div
                  key={index}
                  className=" font-playfairDisplay font-medium text-base text-textColorDarkGray border border-primaryColorBlue bg-secondaryColorLight rounded-lg m-2 px-4 py-2"
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

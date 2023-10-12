import React from "react";
import { CarouselSectionProps } from "../interfaces/global.interface";
import carousel_1 from "../assets/imgs/carousel_1.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "../App.css";

const CarouselSection: React.FC<CarouselSectionProps> = ({
  carouselImages,
}) => {
  return (
    <div
      className="w-full"
      //style={{ height: "calc(100vh - 144px)" }}
    >
      <div className="w-full flex items-center">
        {carouselImages.length > 0 ? (
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            className="w-full swiper"
            //style={{ height: "calc(100vh - 144px)" }}
          >
            {carouselImages.map((item, index) => (
              <img
                sizes="85"
                loading="lazy"
                key={index}
                src={item.src}
                alt=""
                className="w-full object-contain xs:object-cover xs:h-[calc(100vh-144px)]"
                //className={`w-full object-contain xs:object-cover `}
                //style={{ height: "calc(100vh - 144px" }}
              />
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default CarouselSection;

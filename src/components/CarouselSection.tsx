import React from "react";
import { CarouselSectionProps } from "../interfaces/global.interface";
import { register } from "swiper/element/bundle";
import carousel_1 from "../assets/imgs/carousel_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";

const CarouselSection: React.FC<CarouselSectionProps> = ({
  carouselImages,
}) => {
  return (
    <div className="w-full" style={{ height: "calc(100vh - 144px)" }}>
      <div className="w-full flex items-center">
        {carouselImages.map((item, index) => (
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            key={index}
            className="w-full swiper"
            //style={{ height: "calc(100vh - 144px)" }}
          >
            <img
              src={item.src}
              alt=""
              className="w-full object-cover"
              style={{ height: "calc(100vh - 144px" }}
            />
          </Swiper>
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;

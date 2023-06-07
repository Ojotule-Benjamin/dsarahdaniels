import React from "react";
import { CarouselSectionProps } from "../interfaces/global.interface";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselSection: React.FC<CarouselSectionProps> = ({
  carouselImages,
  title,
}) => {
  return (
    <div className="carouselMain w-fit ">
      <h1>{title}</h1>
      <div className="w-full flex items-center justify-center">
        {carouselImages.map((item, index) => (
          <div className="w-screen" key={index}>
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <img
                className="w-full object-cover"
                style={{ height: "calc(100vh - 160px)" }}
                src={item.src}
                alt={item.alt}
              />
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;

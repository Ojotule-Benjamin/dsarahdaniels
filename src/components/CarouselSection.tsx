import React from "react";
import { Carousel } from "react-bootstrap";
import { Images } from "../interfaces/global.interface";

type CarouselSectionProps = {
  images: Images[];
  title: string;
};

const CarouselSection: React.FC<CarouselSectionProps> = ({ images, title }) => {
  return (
    <div className="carouselMain">
      <h1>{title}</h1>
      <Carousel>
        {images.map((item, index) => (
          <Carousel.Item key={index} interval={1000}>
            <img className="d-block w-100" src={item.src} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;

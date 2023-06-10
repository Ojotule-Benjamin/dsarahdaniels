import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const Gallery = () => {
  const location = useLocation();
  const { item } = location.state;

  // Go back to the previous location
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="">
      <Header header={item.label} />
      <div className="w-full h-[400px] flex items-center justify-center gap-3 border border-primaryColorBlue">
        <img
          src={item.src1}
          alt={item.label}
          className=" w-[400px] h-96 object-cover"
        />
        <img
          src={item.src2}
          alt={item.label}
          className=" w-[400px] h-96 object-cover"
        />
        <img
          src={item.src3}
          alt={item.label}
          className=" w-[400px] h-96 object-cover"
        />
      </div>

      <div className="w-full px-16 my-10 flex flex-col items-center justify-between gap-5">
        <h1 className=" font-playfairDisplay font-bold text-primaryColorBlue text-2xl pb-5">
          About this Event
        </h1>
        <p className=" font-playfairDisplay font-normal text-center text-xl text-textColorBlack pb-5">
          At the Temsey wedding, we had the honor of capturing a truly magical
          and unforgettable day. The couple wanted their wedding to be a
          reflection of their love story, and we were committed to delivering a
          personalized experience that exceeded their expectations. From the
          breathtaking venue to the intricate floral arrangements and stunning
          attire, every detail of the Temsey wedding was meticulously planned
          and executed with precision. We worked closely with the couple to
          capture their vision and highlight the unique beauty of their special
          day. Our team of skilled photographers was dedicated to creating
          timeless and authentic images that truly captured the essence of the
          couple's love story. We believe that every couple deserves to have
          their wedding day documented in a way that is personal, elegant, and
          unforgettable, and that's exactly what we delivered for the Temsey
          wedding. It was a true honor to be a part of this couple's love story,
          and we're proud to have delivered a photography experience that truly
          reflected their vision and captured the beauty of their special day.
        </p>
        <CustomButton
          className=" w-56 h-11"
          text="Go back to Events"
          onClick={() => handleGoBack()}
        />
      </div>
    </div>
  );
};

export default Gallery;

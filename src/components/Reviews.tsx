import React from "react";

const Reviews = () => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center gap-5 px-16 my-10 bg-secondaryColorLight">
      <h3 className=" font-playfairDisplay font-normal text-5xl text-primaryColorBlue">
        Reviews
      </h3>

      <p className=" px-10 font-playfairDisplay font-normal text-xl text-center text-textColorDarkGray">
        "At Dsarah Daniels, we pride ourselves on having a team of talented and
        experienced event professionals who are passionate about making your
        event a success. Our team includes event coordinators, designers,
        logistics specialists, floral designers, and more - all dedicated to
        ensuring every aspect of your event is flawlessly executed. With our
        expertise and enthusiasm, we will handle all the details so that you can
        relax and enjoy your event to the fullest. Let us bring our positive,
        creative and enjoyable approach to your celebration and make it an
        unforgettable experience for everyone involved"
      </p>
      <p className="font-playfairDisplay font-normal text-2xl text-primaryColorBlue">
        Godiya & Micheal
      </p>
    </div>
  );
};

export default Reviews;

import React from "react";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    id: 1,
    comment: ` ""I couldn't be happier with the stunning photos that Lumiere Captures captured on my special day. They truly have an eye for capturing the beauty in every moment and creating timeless memories that I will cherish for a lifetime. The team was professional, accommodating, and made the entire experience enjoyable and stress-free. I highly recommend Lumiere Captures to any bride looking for exquisite and elegant photography for their wedding day.""`,
    name: " Godiya & Micheal",
  },
  // {
  //   id: 2,
  //   comment: ` "At Dsarah Daniels, we pride ourselves on having a team of talented and
  //   experienced event professionals who are passionate about making your
  //   event a success. Our team includes event coordinators, designers,
  //   logistics specialists, floral designers, and more - all dedicated to
  //   ensuring every aspect of your event is flawlessly executed. With our
  //   expertise and enthusiasm, we will handle all the details so that you can
  //   relax and enjoy your event to the fullest. Let us bring our positive,
  //   creative and enjoyable approach to your celebration and make it an
  //   unforgettable experience for everyone involved"`,
  //   name: " blessing & Micheal",
  // },
  // {
  //   id: 3,
  //   comment: ` "At Dsarah Daniels, we pride ourselves on having a team of talented and
  //   experienced event professionals who are passionate about making your
  //   event a success. Our team includes event coordinators, designers,
  //   logistics specialists, floral designers, and more - all dedicated to
  //   ensuring every aspect of your event is flawlessly executed. With our
  //   expertise and enthusiasm, we will handle all the details so that you can
  //   relax and enjoy your event to the fullest. Let us bring our positive,
  //   creative and enjoyable approach to your celebration and make it an
  //   unforgettable experience for everyone involved"`,
  //   name: " martins & Micheal",
  // },
];

const Reviews = () => {
  return (
    <div className="w-full h-full lg:h-80 flex flex-col items-center justify-between gap-5 p-8 lg:px-16 mb-10 bg-secondaryColorLight">
      <h3 className=" font-playfairDisplay font-normal text-2xl lg:text-5xl text-primaryColorBlue">
        Reviews
      </h3>

      <div className="w-full lg:w-3/5 h-full flex items-center justify-center flex-col ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col items-center justify-center"
          >
            <p className=" flex font-playfairDisplay pb-4 lg:pb-10 font-normal text-sm lg:text-sm text-center text-textColorDarkGray">
              {review.comment}
            </p>
            <p className="font-playfairDisplay font-normal text-lg text-primaryColorBlue">
              {review.name}
            </p>
          </div>
        ))}
        {/* <p className=" flex font-playfairDisplay pb-4 lg:pb-10 font-normal text-sm lg:text-sm text-center text-textColorDarkGray">
          "I couldn't be happier with the stunning photos that Lumiere Captures
          captured on my special day. They truly have an eye for capturing the
          beauty in every moment and creating timeless memories that I will
          cherish for a lifetime. The team was professional, accommodating, and
          made the entire experience enjoyable and stress-free. I highly
          recommend Lumiere Captures to any bride looking for exquisite and
          elegant photography for their wedding day."
        </p>
        <p className="font-playfairDisplay font-normal text-lg text-primaryColorBlue">
          Godiya & Micheal
        </p> */}
      </div>
    </div>
  );
};

export default Reviews;

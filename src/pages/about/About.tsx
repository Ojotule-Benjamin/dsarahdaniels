import React from "react";
import CarouselSection from "../../components/CarouselSection";
import WhatWeDo from "../../components/WhatWeDo";
import {
  carouselImagesItems,
  howWeWorkImgsItem,
} from "../../interfaces/global.interface";
import GetUpdates from "../../components/GetUpdates";
import MeetCreativeDirector from "../../components/MeetCreativeDirector";
import Reviews from "../../components/Reviews";
import img_1 from "../../assets/imgs/img_1.png";
import CustomButton from "../../components/CustomButton";

const About = () => {
  const aboutCarouselImgs: carouselImagesItems[] = [
    {
      id: 1,
      //src: require("../../assets/imgs/carousel_1.png"),
      src: require("../../assets/imgs/sneakPeak2.png"),
      alt: "slide 1",
    },
    {
      id: 2,
      //src: require("../../assets/imgs/carousel_2.png"),
      src: require("../../assets/imgs/sneakPeak3.png"),
      alt: "slide 2",
    },
    {
      id: 3,
      //src: require("../../assets/imgs/carousel_3.png"),
      src: require("../../assets/imgs/sneakPeak5.png"),
      alt: "slide 3",
    },
  ];

  const howWeWorkImgs: howWeWorkImgsItem[] = [
    {
      id: 1,
      src: require("../../assets/imgs/howWeWorkImgs_1.png"),
      alt: "what we do",
    },
    {
      id: 2,
      src: require("../../assets/imgs/howWeWorkImgs_2.png"),
      alt: "what we do",
    },
    {
      id: 3,
      src: require("../../assets/imgs/howWeWorkImgs_3.png"),
      alt: "what we do",
    },
  ];

  return (
    <div className=" bg-backgroundColor">
      <h1 className=" w-full h-24 flex items-center justify-center font-playfairDisplay font-normal text-5xl text-primaryColorBlue">
        About Us And We Do
      </h1>
      <CarouselSection carouselImages={aboutCarouselImgs} />
      <WhatWeDo />
      <div className=" w-full px-16 my-6">
        <p className=" w-auto h-[300px] bg-secondaryColorLight px-20 flex items-center justify-center font-playfairDisplay font-semibold text-primaryColorBlue text-lg text-center">
          At Dsarah Daniels, we pride ourselves on having a team of talented and
          experienced event professionals who are passionate about making your
          event a success. Our team includes event coordinators, designers,
          logistics specialists, floral designers, and more - all dedicated to
          ensuring every aspect of your event is flawlessly executed. With our
          expertise and enthusiasm, we will handle all the details so that you
          can relax and enjoy your event to the fullest. Let us bring our
          positive, creative and enjoyable approach to your celebration and make
          it an unforgettable experience for everyone involved
        </p>
      </div>
      {/* <div className="w-full h-80">
        <iframe
          width="560"
          height="320"
          src="https://www.youtube.com/embed/nYL1Lk47IIA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div> */}
      <MeetCreativeDirector
        img={img_1}
        subTitle="Sarah Daniels"
        button={<CustomButton text="Connect" />}
        generalClassName="flex items-center justify-around"
        descClassName="text-lg"
        desc="Creating unforgettable events is an art that combines joy, love, and simplicity, and at Dsarah Daniels, we are masters of this craft."
      />

      {/* how we work */}
      <div className=" w-full ">
        <div className="w-full px-20 pt-10 flex flex-col items-center justify-center">
          <h1 className=" font-playfairDisplay font-medium text-5xl text-primaryColorBlue text-center mb-5">
            How Dsarah Daniels Team Works
          </h1>
          <p className=" font-playfairDisplay font-normal text-textColorBlack text-center text-base">
            Our approach at Dsarah Daniels is to work collaboratively with our
            clients, taking time to understand their unique vision and
            preferences for their events. We begin by conducting an initial
            consultation to discuss your goals and expectations. and our range
            of services. Once we have a clear understanding of your needs, we
            will develop a customized event plant tailored to your specific
            requirements. Our team of experienced professionals will handle all
            aspects of planning and executing your event, from selecting and
            managing vendors to ensuring seamless logistics on the day of your
            celebration. We pride ourselves on our attention to detail,
            creativity and exceptional customer service, and are committed to
            delivering a stress-free and unforgettable experience for your and
            your guests. Throughout the entire planning process and on the day
            of your event, we will be available to provide guidance, answer your
            questions, and make any necessary adjustment to ensure everything
            runs smoothly. Let us take care of the details and bring your vision
            to life, so you can relax and enjoy your special day with peace of
            mind
          </p>
        </div>
        <div className=" w-full h-96 flex items-center justify-center flex-wrap  gap-3 ">
          {howWeWorkImgs.map((item, index) => (
            <div className="w-80 h-80" key={index}>
              <img
                src={item.src}
                alt={item.alt}
                key={index}
                className="w-80 h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Reviews />
      <GetUpdates />
    </div>
  );
};

export default About;

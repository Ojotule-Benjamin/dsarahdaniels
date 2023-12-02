import React from "react";
import WhatWeDo from "../../components/WhatWeDo";
import { howWeWorkImgsItem } from "../../interfaces/global.interface";
import GetUpdates from "../../components/GetUpdates";
import MeetCreativeDirector from "../../components/MeetCreativeDirector";
import Reviews from "../../components/Reviews";
import img_1 from "../../assets/imgs/img_1.png";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Marquee from "react-fast-marquee";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

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
    {
      id: 4,
      src: require("../../assets/imgs/howWeWorkImgs_1.png"),
      alt: "what we do",
    },
    {
      id: 5,
      src: require("../../assets/imgs/howWeWorkImgs_3.png"),
      alt: "what we do",
    },
    {
      id: 6,
      src: require("../../assets/imgs/howWeWorkImgs_2.png"),
      alt: "what we do",
    },
    {
      id: 7,
      src: require("../../assets/imgs/howWeWorkImgs_1.png"),
      alt: "what we do",
    },
  ];

  return (
    <div className=" bg-backgroundColor">
      <Header
        header="About Us And We Do"
        className="w-full h-12 lg:h-24 flex items-center justify-center font-playfairDisplay font-normal text-xl md:text-2xl lg:text-5xl text-primaryColorBlue"
      />

      <WhatWeDo />
      <div className="hidden md:flex w-full p-0 md:p-16 my-0">
        <p className=" w-full h-80 bg-secondaryColorLight p-4 lg:p-10 flex items-center justify-center font-playfairDisplay font-semibold text-primaryColorBlue text-base text-center">
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
      <div className="w-full flex items-center justify-center h-80">
        <iframe
          width="560"
          height="320"
          src="https://www.youtube.com/embed/nYL1Lk47IIA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>
      <MeetCreativeDirector
        img={img_1}
        subTitle="Sarah Daniels"
        button={<CustomButton text="Connect" onClick={() => handleClick()} />}
        descClassName="text-lg"
        generalClassName=" h-52 lg:h-[365px] gap-2 lg:gap-2  p-4 lg:p-8"
        desc="Creating unforgettable events is an art that combines joy, love, and simplicity, and at Dsarah Daniels, we are masters of this craft."
      />

      {/* how we work */}
      <div className=" w-full h-full lg:py-5 ">
        <div className="w-full flex flex-col items-center justify-center px-8 md:px-16">
          <h1 className=" font-playfairDisplay font-medium text-2xl lg:text-5xl text-primaryColorBlue text-center mb-5">
            How Dsarah Daniels Team Works
          </h1>
          <div className="">
            <p className=" font-playfairDisplay font-normal text-textColorBlack text-justify text-base">
              Our approach at Dsarah Daniels is to work collaboratively with our
              clients, taking time to understand their unique vision and
              preferences for their events. We begin by conducting an initial
              consultation to discuss your goals and expectations. and our range
              of services. Once we have a clear understanding of your needs, we
              will develop a customized event plant tailored to your specific
              requirements. Our team of experienced professionals will handle
              all aspects of planning and executing your event, from selecting
              and managing vendors to ensuring seamless logistics on the day of
              your celebration.
            </p>
            <br />

            <p className=" font-playfairDisplay font-normal text-textColorBlack text-justify text-base">
              We pride ourselves on our attention to detail, creativity and
              exceptional customer service, and are committed to delivering a
              stress-free and unforgettable experience for your and your guests.
              Throughout the entire planning process and on the day of your
              event, we will be available to provide guidance, answer your
              questions, and make any necessary adjustment to ensure everything
              runs smoothly. Let us take care of the details and bring your
              vision to life, so you can relax and enjoy your special day with
              peace of mind
            </p>
          </div>
        </div>

        <Marquee
          loop={0}
          autoFill={true}
          pauseOnClick={true}
          className="w-full h-full gap-8 flex items-center justify-center my-10 "
        >
          <div className="w-full h-full flex items-center justify-center gap-4">
            {howWeWorkImgs.map((item, index) => (
              <div className=" h-80 p-0 horizontal-scrolling-items" key={index}>
                <img
                  src={item.src}
                  alt={item.alt}
                  key={index}
                  className="w-80 h-80 object-cover "
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <Reviews />
      <GetUpdates />
    </div>
  );
};

export default About;

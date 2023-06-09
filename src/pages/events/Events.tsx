import React from "react";
import Header from "../../components/Header";
import { IEventImageItem } from "../../interfaces/global.interface";
import CustomButton from "../../components/CustomButton";

const Events = () => {
  const eventsImgs: IEventImageItem[] = [
    {
      id: 1,
      src1: require("../../assets/imgs/TEMSEY22_3.png"),
      src2: require("../../assets/imgs/TEMSEY22_2.png"),
      src3: require("../../assets/imgs/TEMSEY22_1.png"),
      label: "#TEMSEY22",
    },
    {
      id: 2,
      src1: require("../../assets/imgs/GODIYAKAY_3.png"),
      src2: require("../../assets/imgs/GODIYAKAY_2.png"),
      src3: require("../../assets/imgs/GODIYAKAY_1.png"),
      label: "#GODIYAKAY",
    },

    {
      id: 3,
      src1: require("../../assets/imgs/PIA24BOHO_2.png"),
      src2: require("../../assets/imgs/PIA24BOHO_1.png"),
      src3: require("../../assets/imgs/PIA24BOHO_3.png"),
      label: "#PIA24BOHO",
    },

    {
      id: 4,
      src1: require("../../assets/imgs/TEMSEY22_3.png"),
      src2: require("../../assets/imgs/TEMSEY22_2.png"),
      src3: require("../../assets/imgs/TEMSEY22_1.png"),
      label: "#Splitatulz",
    },
    {
      id: 5,
      src1: require("../../assets/imgs/PIA24BOHO_2.png"),
      src2: require("../../assets/imgs/PIA24BOHO_1.png"),
      src3: require("../../assets/imgs/PIA24BOHO_3.png"),
      label: "#PIA24BOHO",
    },

    {
      id: 6,
      src1: require("../../assets/imgs/TEMSEY22_3.png"),
      src2: require("../../assets/imgs/TEMSEY22_2.png"),
      src3: require("../../assets/imgs/TEMSEY22_1.png"),
      label: "#Splitatulz",
    },
    {
      id: 7,
      src1: require("../../assets/imgs/PIA24BOHO_2.png"),
      src2: require("../../assets/imgs/PIA24BOHO_1.png"),
      src3: require("../../assets/imgs/PIA24BOHO_3.png"),
      label: "#PIA24BOHO",
    },

    {
      id: 8,
      src1: require("../../assets/imgs/TEMSEY22_3.png"),
      src2: require("../../assets/imgs/TEMSEY22_2.png"),
      src3: require("../../assets/imgs/TEMSEY22_1.png"),
      label: "#Splitatulz",
    },
    {
      id: 9,
      src1: require("../../assets/imgs/TEMSEY22_3.png"),
      src2: require("../../assets/imgs/TEMSEY22_2.png"),
      src3: require("../../assets/imgs/TEMSEY22_1.png"),
      label: "#Splitatulz",
    },
  ];

  return (
    <div>
      <Header header="Our Events" />
      <div className=" w-full flex justify-center items-center columns-3 px-16 pb-10 flex-wrap bg-backgroundColor">
        {eventsImgs.map((item, index) => (
          <div
            className="w-96 h-[370px] flex items-center justify-center flex-col relative"
            key={index}
          >
            <img
              src={item.src1}
              alt={item.label}
              className="w-80 h-[237px] object-contain z-0 absolute top-0 left-0 right-14 "
            />
            <img
              src={item.src2}
              alt={item.label}
              className="w-80 h-[237px]  object-contain z-10 absolute top-9 left-6  "
            />
            <img
              src={item.src3}
              alt={item.label}
              className="w-80 h-[237px] object-contain z-20 absolute top-20 left-12 bottom-0 right-0 "
            />

            <CustomButton
              text={item.label}
              className=" w-80 h-12 shadow-lg shadow-backgroundColor-500/50 absolute bottom-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

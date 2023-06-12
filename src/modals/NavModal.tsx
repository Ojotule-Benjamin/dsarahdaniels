import React from "react";
import { servicesListItems } from "../interfaces/global.interface";
import { useNavigate } from "react-router-dom";
import { servicesList } from "../data";

const NavModal = () => {
  const navigate = useNavigate();
  // const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  // const handleMouseEnter = () => {
  //   setIsModalOpen(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsModalOpen(false);
  // };

  const handleNav = (item: servicesListItems) => {
    navigate(`/service?id=${item.id}`, { state: { item } });
  };

  return (
    <div className=" w-[187px] h-48 p-3 cursor-pointer gap-1 absolute flex flex-col items-start top-20 z-10 bg-backgroundColor shadow-xl rounded-sm">
      {servicesList.map((item, index) => (
        <h1
          key={index}
          onClick={() => handleNav(item)}
          className="text-sm font-normal hover:border-b-2 border-primaryColorBlue duration-300 ease-in-out"
        >
          {item.service}
        </h1>
      ))}
    </div>
  );
};

export default NavModal;

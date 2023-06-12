import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { IGetUpdatesProps } from "../interfaces/global.interface";

const GetUpdates = () => {
  const [inputValues, setInputValues] = useState<IGetUpdatesProps>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(inputValues);
    setInputValues({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className="w-screen h-full flex flex-col items-center justify-center gap-3 xs:gap-10 px-5 xs:px-0 py-5 bg-secondaryColorLight">
      <h1 className="text-center font-playfairDisplay font-medium text-2xl xs:text-4xl text-primaryColorBlue ">
        Get Updates
      </h1>
      <div className="w-full h-auto xs:px-60">
        <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-3 mb-5">
          {/* first name */}
          <div className="w-full flex flex-col ">
            <label className=" font-playfairDisplay font-normal text-xs text-[#717073] pb-1 xs:pb-2">
              First Name *
            </label>
            <input
              name="firstName"
              value={inputValues.firstName}
              onChange={handleChange}
              className=" w-full h-14 rounded-sm outline-none p-2 text-sm text-textColorDarkGray"
            />
          </div>

          {/* last name */}
          <div className="w-full flex flex-col">
            <label className=" font-playfairDisplay font-normal text-xs text-[#717073] pb-1 xs:pb-2">
              Last Name *
            </label>
            <input
              name="lastName"
              value={inputValues.lastName}
              onChange={handleChange}
              className=" w-full h-14 rounded-sm outline-none p-2 text-sm text-textColorDarkGray"
            />
          </div>
        </div>

        {/* email */}
        <div className="flex flex-col w-full">
          <label className=" font-playfairDisplay font-normal text-xs text-[#717073] pb-1 xs:pb-2">
            Your email
          </label>
          <input
            name="email"
            value={inputValues.email}
            onChange={handleChange}
            className=" w-full h-14 rounded-sm outline-none p-2 text-sm text-textColorDarkGray"
          />
        </div>
      </div>

      <CustomButton
        text="Submit"
        className=" w-32 h-8 bg-white rounded-sm"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default GetUpdates;

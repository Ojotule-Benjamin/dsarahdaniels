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
    <div className="w-screen h-[400px] flex flex-col items-center justify-center gap-10 bg-secondaryColorLight">
      <h1 className="text-center font-playfairDisplay font-medium text-4xl text-[#094257] ">
        Get Updates
      </h1>
      <div className="w-full h-auto  px-60">
        <div className="w-full flex items-center justify-center gap-3 mb-5">
          {/* first name */}
          <div className="w-full flex flex-col ">
            <label className=" font-playfairDisplay font-normal text-xs text-[#717073] pb-2">
              First Name *
            </label>
            <input
              name="firstName"
              value={inputValues.firstName}
              onChange={handleChange}
              className=" w-full h-14 rounded-sm outline-none pl-5"
            />
          </div>

          {/* last name */}
          <div className="w-full flex flex-col">
            <label className=" font-playfairDisplay font-normal text-xs text-[#717073] pb-2">
              Last Name *
            </label>
            <input
              name="lastName"
              value={inputValues.lastName}
              onChange={handleChange}
              className=" w-full h-14 rounded-sm outline-none pl-5"
            />
          </div>
        </div>

        {/* email */}
        <div className="flex flex-col w-full">
          <label className=" font-playfairDisplay font-normal text-xs text-[#717073] pb-2">
            Your email
          </label>
          <input
            name="email"
            value={inputValues.email}
            onChange={handleChange}
            className=" w-full h-14 rounded-sm outline-none pl-5"
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

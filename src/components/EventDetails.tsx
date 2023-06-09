import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { data } from "../../src/data";

const EventDetails = () => {
  const handleChange = () => {
    console.log("text");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10 ">
      <div className="w-1/2 mb-10">
        <h1 className="  text-center font-playfairDisplay font-medium text-4xl text-primaryColorBlue pb-10">
          Please share the details of your event with us.
        </h1>
        <p className=" font-playfairDisplay font-normal text-lg text-[#9A9A9D] text-center">
          Kindly share the details of your event with us, and we'll get in touch
          with you as soon as possible. You can also reach us directly at 0703
          585 3644. We look forward to creating an unforgettable experience with
          you.
        </p>
      </div>

      <form className=" py-5 flex flex-col gap-2 items-center justify-center">
        <h3 className=" font-playfairDisplay font-normal text-2xl text-center text-primaryColorBlue mb-5">
          Please Provide Us With Some Information About Yourself?
        </h3>

        {data.map((item, index) => (
          <div className="w-full" key={index}>
            <CustomInput
              type={item.type}
              name={item.name}
              value=""
              onChange={handleChange}
              label={item.label}
              placeholder={item.placeholder}
              className="border border-[#EEEEEE]"
            />
            {index === 3 && (
              <div>
                <h1 className="text-center font-playfairDisplay font-medium text-2xl text-primaryColorBlue mt-4">
                  Tell Us About Your Event
                </h1>
              </div>
            )}
          </div>
        ))}

        <CustomButton
          text="Submit"
          className=" w-96 h-14 border bg-[#EEEEEE] rounded-sm my-10"
        />
      </form>
    </div>
  );
};

export default EventDetails;

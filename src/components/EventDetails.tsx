import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { data } from "../../src/data";

const EventDetails = () => {
  const handleChange = () => {
    console.log("text");
  };

  return (
    <div className="flex flex-col items-center justify-center px-5 xs:px-0 xs:pt-10 ">
      <div className=" w-full xs:w-1/2 mb-3 xs:mb-10">
        <h1 className="  text-center font-playfairDisplay font-medium text-2xl xs:text-4xl text-primaryColorBlue pb-5 xs:pb-10">
          Please share the details of your event with us.
        </h1>
        <p className=" font-playfairDisplay font-normal text-xs xs:text-lg text-[#9A9A9D] leading-4 xs:leading-6 text-center">
          Kindly share the details of your event with us, and we'll get in touch
          with you as soon as possible. You can also reach us directly at{" "}
          <a href="tel:07035853644" className=" text-primaryColorBlue">
            +234 7035 853 644
          </a>
          . We look forward to creating an unforgettable experience with you.
        </p>
      </div>

      <form className="w-full xs:w-1/2 xs:py-5  flex flex-col gap-2 items-center justify-center">
        <h3 className=" font-playfairDisplay font-normal text-2xl text-center text-primaryColorBlue mb-5">
          Please Provide Us With Some Information About Yourself?
        </h3>

        {data.map((item, index) => (
          <div className="w-full xs:px-20" key={index}>
            <CustomInput
              type={item.type}
              name={item.name}
              value=""
              onChange={handleChange}
              label={item.label}
              placeholder={item.placeholder}
              className="border border-borderColor"
            />
            {index === 3 && (
              <div>
                <h1 className="text-center font-playfairDisplay font-medium text-xl xs:text-2xl text-primaryColorBlue mt-4">
                  Tell Us About Your Event
                </h1>
              </div>
            )}
          </div>
        ))}

        <CustomButton
          text="Submit"
          className=" xs:w-96 xs:h-14 border border-borderColor rounded-sm my-3 xs:my-10"
        />
      </form>
    </div>
  );
};

export default EventDetails;

import React from "react";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const Enquiry = () => {
  return (
    <div className="w-full px-40 flex flex-col ">
      <Header
        header="Let's Connect and Start Planning Together!"
        className=""
      />
      {/* talk to you */}
      <div className=" flex flex-col gap-1 pt-10">
        <h1 className=" font-playfairDisplay font-normal text-3xl pb-5  text-primaryColorBlue">
          WE’D LOVE TO TALK TO YOU
        </h1>
        <div>
          <p className=" font-playfairDisplay font-normal text-sm text-textColorDarkGray">
            Email Us At:{" "}
            <a
              className=" text-xl text-primaryColorBlue"
              href="mailto:dsarahdaniels@yahoo.com"
            >
              dsarahdaniels@yahoo.com
            </a>
          </p>
        </div>
        <div className=" flex items-start">
          <p className=" font-playfairDisplay font-normal text-sm text-textColorDarkGray">
            Or Call Us At:{" "}
            <a
              href="tel:07035853644"
              className=" text-xl text-primaryColorBlue"
            >
              +234 0703 585 3644
            </a>
          </p>
        </div>

        <div>
          <p className=" font-playfairDisplay font-normal text-sm text-textColorDarkGray">
            You Can Also Visit Our Office:{" "}
            <span className=" text-xl text-primaryColorBlue">
              Suit c31 Emmanuel plaza utako, Abuja
            </span>
          </p>
        </div>
      </div>

      {/* partnership */}
      <div className=" w-1/2 flex flex-col gap-1 py-14">
        <h1 className=" font-playfairDisplay font-normal pb-5 text-3xl text-primaryColorBlue">
          PARTNERS & VENDORS
        </h1>
        <p className="   font-playfairDisplay font-normal text-lg text-textColorBlack">
          We’re always in the market for new talent! Partners and suppliers, we
          would love for you to join our database, so as future opportunities to
          collaborate present themselves, we can be in touch.
        </p>
        <form className=" pt-10 flex flex-col gap-5">
          {/* <div className="flex flex-col ">
            <label className=" font-playfairDisplay font-semibold text-sm text-textColorDarkGray">
              Name or Company
            </label>
            <input
              name="name"
              className=" w-2/3 p-5 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none h-9"
              placeholder="Enter Name or Company "
            />
          </div>
          <div className="flex flex-col ">
            <label className=" font-playfairDisplay font-semibold text-sm text-textColorDarkGray">
              Email
            </label>
            <input
              className=" w-2/3 p-5 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none h-9"
              placeholder="Enter Name or Company "
            />
          </div>
          <div className="flex flex-col ">
            <label className=" font-playfairDisplay font-semibold text-sm text-textColorDarkGray">
              Website
            </label>
            <input
              className=" w-2/3 p-5 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none h-9"
              placeholder="Enter Name or Company "
            />
          </div>
          <div className="flex flex-col ">
            <label className=" font-playfairDisplay font-semibold text-sm text-textColorDarkGray">
              Tell us about your service
            </label>
            <textarea
              className=" h-28 mb-5 p-5 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none "
              placeholder="Enter Name or Company "
            />
          </div> */}

          <CustomInput
            type="text"
            label={"Name / Company "}
            //name= {companyName}
            //value= {value}
            //onChange,
            placeholder="Enter Name or Company"
            className=" w-2/3 p-5 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none h-9"
          />
          <CustomInput
            type="text"
            label={"Email "}
            //name= {companyName}
            //value= {value}
            //onChange,
            placeholder="Enter Name or Company"
            className=" w-2/3 p-5 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none h-9"
          />
          <CustomInput
            type="text"
            label={"Website "}
            //name= {companyName}
            //value= {value}
            //onChange,
            placeholder="Enter Name or Company"
            className=" w-2/3 p-5 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none h-9"
          />
          {/* <CustomInput
            type="text"
            label={"Tell us about your service"}
            //name= {companyName}
            //value= {value}
            //onChange,
            placeholder="Tell us about your service"
            className=" h-28 mb-5 p-0 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none "
          /> */}
          <div className="flex flex-col ">
            <label className=" font-playfairDisplay font-semibold text-sm text-textColorDarkGray">
              Tell us about your service
            </label>
            <textarea
              className=" h-28 mb-5 p-5 font-playfairDisplay text-sm text-textColorBlack border border-borderColor outline-none "
              placeholder="Enter Name or Company "
            />
          </div>

          <CustomButton text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Enquiry;

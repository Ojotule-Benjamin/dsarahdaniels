import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";

const BlogPost = () => {
  const location = useLocation();
  const { item } = location.state || {};

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className=" px-16">
      <Header header="Blog" />
      <div className="w-full h-[568px] flex items-center justify-center gap-5  mb-10">
        {item.postImages.map((image: string, index: number) => (
          <div className="w-full h-full ">
            <img
              key={index}
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-8 pb-5">
        <h2 className="px-60 font-playfairDisplay font-bold text-4xl text-center text-primaryColorBlue">
          {item.title}
        </h2>
        <p className=" mt-10 font-playfairDisplay leading-8 font-bold text-base text-justify text-textColorDarkGray">
          {item.desc}
        </p>
        <CustomButton text="Go back" onClick={() => handleGoBack()} />
      </div>
    </div>
  );
};

export default BlogPost;

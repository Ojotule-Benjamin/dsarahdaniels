import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Post {
  id: number;
  desc: string;
  title: string;
  body: string;
  postImg?: string;
  onClick?: () => void;
}

const BlogPostCard: React.FC<Post> = ({
  id,
  title,
  desc,
  postImg,
  onClick,
}) => {
  return (
    <div
      key={id}
      className="border-4 w-[350px] h-[550px] p-3 rounded-3xl flex flex-col gap-2  bg-[#FAFAFA] shadow-md "
    >
      <div className="w-full h-[278px]">
        <img
          src={postImg}
          alt=""
          className=" h-full rounded-3xl object-cover"
        />
      </div>
      <div className="w-full flex items-center gap-5">
        <div className="flex items-center justify-center font-playfairDisplay font-semibold text-sm">
          <CalendarTodayOutlinedIcon
            style={{ fontSize: "14px", marginRight: "5px" }}
          />
          <p>March 15th 2023</p>
        </div>
        <div className="flex items-center justify-center font-playfairDisplay font-semibold text-sm">
          <CommentOutlinedIcon
            style={{ fontSize: "14px", marginRight: "5px" }}
          />
          <p>2 Comments</p>
        </div>
      </div>

      <h4 className=" font-playfairDisplay font-semibold text-xl text-primaryColorBlue overflow-hidden line-clamp-2">
        {title}
      </h4>
      <p className="w-full h-auto font-playfairDisplay font-semibold text-sm text-textColorBlack mb-4 overflow-hidden line-clamp-5">
        {desc}
      </p>

      <div className="flex items-center " onClick={onClick}>
        <p className=" font-playfairDisplay font-semibold text-sm text-primaryColorBlue ">
          Read more
        </p>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
};

export default BlogPostCard;

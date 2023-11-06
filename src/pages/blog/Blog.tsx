import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import services_4 from "../../assets/imgs/services_4.png";
import { posts } from "../../data";
import { postsItem } from "../../interfaces/global.interface";
import GetUpdates from "../../components/GetUpdates";
import { Link, useNavigate } from "react-router-dom";
import { error } from "console";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blog = () => {
  const navigate = useNavigate();
  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts",
  //         {
  //           method: "GET",
  //         }
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data: Post[] = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.log("Failed to fetch data", error);
  //     }
  //   };
  //   getPosts();
  // }, []);

  const handleNavigate = (id: string, item: postsItem) => {
    navigate(`/blog/blogPost/${id}`, { state: { item } });
  };

  return (
    <div className=" ">
      <Header header="Blog" />
      <div className="px-16 relative flex items-center justify-center">
        <img src={services_4} alt="" className="" />
        <div className="w-4/5 h-[403px] bg-[#d9d9d9] opacity-70 absolute mx-auto flex flex-col p-10">
          <h3 className=" font-playfairDisplay font-semibold text-4xl text-primaryColorBlue">
            Discover the Enchanting World of Event Management Through Our Blog.
          </h3>
          <p className=" font-playfairDisplay font-medium text-lg text-textColorBlack py-10">
            Discover the latest trends in event planning, from enchanting
            wedding designs to sophisticated corporate soirées. Gain exclusive
            access to insider tips and expert advice, empowering you to create
            your own remarkable occasions.
          </p>
        </div>
      </div>

      <h3 className="px-16 py-10 font-playfairDisplay font-semibold text-4xl text-primaryColorBlue">
        Recent Blog Post
      </h3>

      {/* posts */}
      <div className=" w-full px-16 flex items-center justify-between gap-5 flex-wrap py-5 shadow-2xl ">
        {posts.map((item: postsItem, index: number) => (
          <div
            key={index}
            className=" w-[350px] h-[550px] p-3 rounded-3xl flex flex-col gap-2  bg-[#FAFAFA] shadow-md "
          >
            <div className="w-full h-[278px]">
              <img
                src={item.postImg}
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
              {item.title}
            </h4>
            <p className="w-full h-auto font-playfairDisplay font-semibold text-sm text-textColorBlack mb-4 overflow-hidden line-clamp-5">
              {item.desc}
            </p>

            <div
              className="flex items-center "
              onClick={() => handleNavigate(`${item.id}`, item)}
            >
              <p className=" font-playfairDisplay font-semibold text-sm text-primaryColorBlue ">
                Read more
              </p>
              <KeyboardArrowRightIcon />
            </div>
          </div>
        ))}
      </div>

      <GetUpdates />
    </div>
  );
};

export default Blog;

import React from "react";
import { FaSearch } from "react-icons/fa";

function LandingHero() {
  return (
    <div className="container flex justify-around my-20 p-10 ">
      <div id="RightSide" className="p-20">
        <h1 className="text-6xl flex font-extrabold">
          عنوان
          <h1 className="text-6xl text-sky-400">آموزشگاه</h1>
        </h1>
        <span className=" text-start my-10 ">
          <p className="my-2 ">
            مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب{" "}
          </p>
          <p className="my-2 ">
            با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی
          </p>
        </span>
        <span className="border border-gray-200 rounded-full p-3 bg-transparent ">
          <input
            type="text"
            className="bg-transparent focus:outline-none px-2 my-10 w-60"
            placeholder="دنبال چی میگردی؟"
          />
          <button className="bg-authOrangbutton p-2 rounded-full text-white">
            <FaSearch />
          </button>
        </span>
      </div>
      <div id="leftSide">
        <span className="relative">
          <img
            src="/public/images/post/hero section main shape.png"
            width="500"
            height="100"
            alt="hero"
          />
          <img
            className="absolute -top-10 -left-10"
            src="/public/images/post/1000 student.png"
            width="160"
            height="100"
            alt="hero"
          />
          <img
            className="absolute -bottom-16 "
            src="/public/images/post/50 teacher.png"
            width="160"
            height="100"
            alt="hero"
          />
        </span>
      </div>
    </div>
  );
}

export default LandingHero;

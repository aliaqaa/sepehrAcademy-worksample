import React from "react";
import { FaSearch } from "react-icons/fa";

function LandingHero() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center  p-4 lg:p-10">
      {/* Right Side - Text and Search */}
      <div className="lg:p-20 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-extrabold flex flex-col lg:flex-row items-center lg:items-start gap-2">
          <span className="hoverscale">عنوان</span>
          <span className="text-sky-400 hoverscale">آموزشگاه</span>
        </h1>
        <div className="my-6 lg:my-10">
          <p className="my-2 hoverscale">
            مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب
          </p>
          <p className="my-2 hoverscale">
            با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی
          </p>
        </div>
        <div className="border border-gray-200 rounded-full p-3 bg-transparent flex items-center justify-between">
          <input
            type="text"
            className="bg-transparent focus:outline-none px-2 w-40 lg:w-60"
            placeholder="دنبال چی میگردی؟"
          />
          <button className="bg-authOrangbutton p-2 rounded-full text-white hoverscale">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Left Side - Images */}
      <div className="relative mt-10 lg:mt-0">
        <img
          src="/public/images/post/hero section main shape.png"
          alt="hero"
          className="w-full max-w-[500px] h-auto"
        />
        <img
          className="absolute -top-10 -left-10 hoverscale w-32 lg:w-40"
          src="/public/images/post/1000 student.png"
          alt="1000 student"
        />
        <img
          className="absolute -bottom-16 hoverscale w-32 lg:w-40"
          src="/public/images/post/50 teacher.png"
          alt="50 teacher"
        />
      </div>
    </div>
  );
}

export default LandingHero;
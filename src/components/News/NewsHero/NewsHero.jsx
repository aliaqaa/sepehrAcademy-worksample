import React from "react";
import { FaSearch } from "react-icons/fa";

function NewsHero() {
  return (
    <div className="container mx-auto rounded-2xl p-4 sm:p-6 my-20">
      {/* Background Shape */}
      <div className="bg-[#EBF9F982] rounded-2xl h-48 sm:h-64 absolute w-full -z-10"></div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-around items-center">
        {/* Right Side: Text and Search */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-black font-extrabold text-2xl sm:text-3xl lg:text-4xl mt-10 sm:mt-20">
            دوره های آموزشی
          </h1>
          <h3 className="my-2 mb-6 sm:mb-10 font-extralight text-gray-600 text-sm sm:text-base lg:text-lg">
            به روز ترین دوره هایی که میتونید پیدا کنید
          </h3>
          <div className="border border-gray-200 rounded-full p-2 sm:p-3 bg-white flex items-center justify-between w-full sm:w-80">
            <input
              type="text"
              className="bg-transparent focus:outline-none px-2 w-full"
              placeholder="چی میخوای یاد بگیری؟..."
              aria-label="Search for courses"
            />
            <button
              className="bg-authOrangbutton p-2 rounded-full text-white hover:bg-orange-600 transition-colors"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Left Side: Images */}
        <div className="relative -top-10 lg:-top-0 max-lg:my-10">
          <img
            src="/public/images/post/Ellipse 38.png"
            alt="Ellipse Background"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
          <img
            src="/public/images/post/Screenshot 2024-04-08 at 05.36 1.png"
            alt="Courses Illustration"
            className="absolute top-0 left-12 sm:left-24 w-60"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsHero;
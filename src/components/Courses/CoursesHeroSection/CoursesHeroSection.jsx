import React from "react";
import { FaSearch } from "react-icons/fa";

function CoursesHeroSection() {
  return (
    <div className="container rounded-2xl p-3 my-40  ">
      <div className="container bg-[#EBF9F982] rounded-2xl h-64 absolute w-full  -z-10 "></div>

      <div className="flex justify-around ">
        <div id="rightside">
          <li className="list-disc text-black disc-green font-extrabold text-4xl mt-20">
            دوره های آموزشی
          </li>
          <h3 className="my-2 mb-10 font-extralight text-gray-600">
            به روز ترین دوره هایی که میتونید پیدا کنید
          </h3>
          <span className="border border-gray-200 rounded-full p-3 bg-white ">
            <input
              type="text"
              className="bg-transparent focus:outline-none px-2 my-2 w-60"
              placeholder="چی میخوای یاد بگیری؟..."
            />
            <button className="bg-authOrangbutton p-2 rounded-full text-white">
              <FaSearch />
            </button>
          </span>
        </div>
        <div id="leftside" className="relative -top-10" >
          <img
            src="/public/images/post/courses hero section shape.png"
            alt="sda"
            className=""
          />
          <img
            src="/public/images/post//backcoursesec.png"
            alt="sda"
            className="absolute top-0 left-24"
          />
        </div>
      </div>
    </div>
  );
}

export default CoursesHeroSection;

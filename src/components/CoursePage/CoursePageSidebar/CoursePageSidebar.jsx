import React from "react";
import { FaUsers, FaStar } from "react-icons/fa";
import CoursePageSidebaritems from "../../../mock/CoursePageSidebaritems";
import { BsBucket } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbStatusChange } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";

function CoursePageSidebar({ filteredCourse }) {
  return (
    <div className=" bg-white rounded-3xl p-4 flex flex-col border mt-12">
      <span className="flex">
        <div className="flex items-center border p-3 rounded-2xl bg-body mx-2">
          <span className="flex  flex-col font-extralight px-4">
            <p className="font-extrabold mx-3">{filteredCourse.likeCount}</p>
            دانشجو
          </span>
          <FaUsers className="text-3xl text-green-500" />
        </div>
        <div className="flex items-center border p-3 rounded-2xl bg-body">
          <span className="flex  flex-col font-extralight px-4">
            <p className="font-extrabold mx-3">{filteredCourse.courseRate}</p>
            رضایت
          </span>
          <FaStar className="text-3xl text-yellow-500" />
        </div>
      </span>
      <div className="my-4">
        <h1 className="font-extrabold">درصد تکمیل دوره</h1>
        <input
          type="range"
          name=""
          id=""
          value={Math.floor(Math.random() * 100)}
          disabled
          className="w-full range-color"
        />
      </div>
      <div>
        {CoursePageSidebaritems.map((item) => (
          <div key={item.id} className=" flex flex-col justify-start gap-3">
            <div className="bg-body p-2 items-center rounded-2xl flex text-green-900 gap-2 shadow-lg border">
                <BsBucket className="text-3xl"/>
              <span className="flex flex-col ">
                <p className="font-extralight text-black">دسته بندی </p>
                {item.cat}
                </span>
            </div>
            <div className="bg-body p-2 items-center rounded-2xl flex text-green-900 gap-2 shadow-lg border">
                <FaBookOpen className="text-3xl"/>
              <span className="flex flex-col ">
                <p className="font-extralight text-black flex">پیش نیاز ها </p>
                {item.prerequizite}
                </span>
            </div>
            <div className="bg-body p-2 items-center rounded-2xl flex text-green-900 gap-2 shadow-lg border">
                <BiSolidCategoryAlt className="text-3xl"/>
              <span className="flex flex-col ">
                <p className="font-extralight text-black">نوع آموزش  </p>
                {filteredCourse[item.learntype]}
                </span>
            </div>
            <div className="bg-body p-2 items-center rounded-2xl flex text-green-900 gap-2 shadow-lg border">
                <TbStatusChange className="text-3xl"/>
              <span className="flex flex-col ">
                <p className="font-extralight text-black flex">وضعیت دوره   </p>
                {filteredCourse[item.statusName]}
                </span>
            </div>
            <div className="bg-body p-2 items-center rounded-2xl flex text-green-900 gap-2 shadow-lg border ">
                <CiClock2 className="text-3xl"/>
              <span className="flex flex-col ">
                <p className="font-extralight text-black flex">تاریخ شروع دوره  </p>
                {filteredCourse[item.lastUpdate]}
                </span>
            </div>
            <div className="bg-body p-2 items-center rounded-2xl flex text-green-900 gap-2 shadow-lg border ">
                <CiClock2 className="text-3xl"/>
              <span className="flex flex-col ">
                <p className="font-extralight text-black flex">تاریخ پایان دوره  </p>
                {filteredCourse[item.teacherName]}
                </span>
            </div>
            <div className=" justify-center">
                <img src= {item.img} alt="kakoo-black" width={100} className="rounded-full shadow-lg m-auto"/>
                <button className="mt-4 bg-transparent text-orange-700 border border-orange-500 rounded-3xl py-2 px-5 hover:bg-orange-100">پروفایل مدرس دوره</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePageSidebar;

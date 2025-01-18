import React from "react";
import { Link } from "react-router";
import fallbackimage from "/public/images/post/next.png";
import { IoIosEye } from "react-icons/io";
import { HiCalendarDateRange } from "react-icons/hi2";

function NewsCard({ item }) {
  

  return (
    <div className="border shadow-xl rounded-b-2xl overflow-visible my-5 text-black bg-white p-5 rounded-t-full flex flex-col w-9/10">
      <Link to={`/news/${item.id}`} className="flex flex-col flex-grow">
        <img
          src={
            item.currentImageAddressTumb
              ? item.currentImageAddressTumb
              : item.addUserProfileImage
              ? item.addUserProfileImage
              : fallbackimage
          }
          alt={item.currentImageAddressTumb}
          layout="responsive"
          width={280}
          height={200}
          className="rounded-2xl scale-95 content-center m-auto -translate-y-14"
        />
        <span className="flex justify-start  font-extrabold text-green-800 overflow-hidden">
          {item.title}
        </span>
        <br />
        <div className="flex justify-between my-2">{item.miniDescribe}</div>
        <div className="flex justify-between">
          <span className="flex font-extralight items-center gap-1">
            <IoIosEye className="text-sky-400" />
            {item.currentView}
            بازدید
          </span>
          <span className="flex items-center gap-2">
            {item.updateDate}
            <HiCalendarDateRange className="text-sky-400" />
          </span>
        </div>
        <div className="mt-auto">
          <hr className="my-2 h-0.5 border-t-1 bg-black dark:bg-white/10" />
          <div className="flex justify-center items-center p-1 text-orange-400 text-center font-extrabold">
            مطالعه بیشتر
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewsCard;
import LiTiles from "../../common/modules/Title/LiTiles";
import LandingServiceItems from "../../../mock/LandingServiceItems";
import React from "react";

function LandingServices() {
  return (
    <>
      <LiTiles
        title="خدمات ما"
        disc="مجموعه‌ای از تمام آنچه شما نیاز دارید"
      />

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 relative my-20 md:my-20 px-4 ">
        {LandingServiceItems.map((item) => (
          <div
            key={item.id}
            className={`relative  shadow-inner my-5 border rounded-xl w-full sm:w-80 p-4 md:p-6 text-center h-40 ${item.class} hoverscale transition-all duration-300 ease-in-out transform hover:scale-105`}
          >
            <span
              className={`absolute scale-150 -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-primaryCyan ${item.color}`}
            >
              <img
                src={item.img}
                width={60}
                height={60}
                alt={item.title}
                className={`${item.color} rounded-full p-3 shadow-md`}
              />
            </span>
            <h2 className={`text-lg md:text-xl font-semibold mt-8`}>
              {item.title}
            </h2>
            <p className="text-xs md:text-sm text-gray-700 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default LandingServices;
import LiTiles from "../../common/modules/Title/LiTiles";
import LandingServiceItems from "../../../mock/LandingServiceItems";
import React from "react";

function LandingServices() {
  return (
    <>
      <LiTiles
        title="  خدمات ما"
        disc="         مجموعه‌ای از تمام آنچه شما نیاز دارید"
      />

      <div className="flex  justify-center gap-6 relative my-20">
        {LandingServiceItems.map((item) => (
          <div
            key={item.id}
            className={`relative shadow-inner border  rounded-xl w-80 p-6 text-center h-40  ${item.class} `}
          >
            <span
              className={`absolute scale-150 -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-primaryCyan ${item.color}`}
            >
              <img
                src={item.img}
                width={60}
                height={60}
                alt={item.title}
                className={`${item.color}  rounded-full p-3 shadow-md`}
              />
            </span>
            <h2 className={`text-xl font-semibold mt-8 `}>{item.title}</h2>
            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default LandingServices;

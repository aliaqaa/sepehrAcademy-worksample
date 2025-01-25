import React from "react";
import FavoriteCats from "../../../mock/FavorieCats";
import LiTitles from "../../common/modules/Title/LiTiles";

function LandingFavorite() {
  return (
    <>
      <LiTitles
        title="محبوب ترین دسته بندی ها"
        disc="محبوب ترین دسته بندی ها"
      />

      <div className="container w-full mx-auto relative my-20 items-center content-center  ">
      <img
          className="absolute inset-0 w-full container h-full  -z-10 "
          src="/public/images/icons/Rectangle-gonda.png"
          alt="background"
        />
        <div id="items" className="flex flex-wrap justify-center items-center gap-6 md:gap-12 max-md:gap-12 max-md:mt-10 lg:gap-20  p-2 sm:p-10 max-sm:p-20 mb-20">
          {FavoriteCats.map((item) => (
            <div
              key={item.id}
              className="rotate-45  flex flex-col justify-center rounded-3xl bg-slate-50 p-4 md:p-6 lg:p-10 items-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 hover:bg-orange-400 shadow-inner  md:mt-24 lg:mt-36 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="-rotate-45 items-center content-center m-auto">
                <h1 className="font-extrabold text-sm md:text-md lg:text-xl text-cyanlogin">
                  {item.name}
                </h1>
                <img
                  src={item.img}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 items-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LandingFavorite;

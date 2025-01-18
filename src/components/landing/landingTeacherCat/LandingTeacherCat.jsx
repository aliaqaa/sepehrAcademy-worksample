import React from "react";
import TeacherSlider from "../TeacherSlider/TeacherSlider";

function LandingTeacherCat() {
  return (
    <>
      <div className="container mx-auto  flex flex-col lg:flex-row justify-around items-center relative my-20 lg:my-40 px-4 pt-20">
      <img
          className="absolute inset-0 w-full container h-full object-cover -z-10 mt-10"
          src="/public/images/icons/Rectangle-gonda.png"
          alt="background"
        />
        <div id="rightside" className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="font-extrabold text-2xl lg:text-3xl flex flex-col lg:flex-row items-center gap-2">
            برترین اساتید
            <span className="text-green-400 text-xl lg:text-2xl">
              رو همینجا پیدا می کنید!!
            </span>
          </h1>
          <p className="font-extralight mt-4 text-sm lg:text-base">
            برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی استان مازندران رو
            بهتر بشناسیم !
          </p>
        </div>
        <div id="leftside" className="w-full lg:w-1/2">
          <TeacherSlider />
        </div>
      </div>
    </>
  );
}

export default LandingTeacherCat;
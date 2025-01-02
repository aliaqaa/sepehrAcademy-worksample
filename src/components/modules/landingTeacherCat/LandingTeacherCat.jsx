import React from "react";
import TeacherSlider from "../TeacherSlider/TeacherSlider";

function LandingTeacherCat() {
  return (
    <>
      <div className=" container flex justify-around items-center relative my-40">
      <img
          className="container absolute  -z-10   w-full"
          src="/public/images/icons/Rectangle-gonda.png"
          alt="rec"
        />
        <div id="rightside" className="text-center ">
          <h1 className="flex font-extrabold text-2xl items-center gap-2">  برترین اساتید  
            <h2 className="text-green-400 text-xl"> رو همینجا پیدا می کنید!!</h2>
           </h1>
          <p className="font-extralight">
            برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی استان مازندران رو
            بهتر بشناسیم !
          </p>
        </div>
        <div id="leftside">
            <TeacherSlider/>
        </div>
      </div>
    </>
  );
}

export default LandingTeacherCat;

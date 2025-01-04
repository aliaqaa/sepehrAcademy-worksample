import React from "react";
import FavoriteCats from "../../../mock/FavorieCats";
import LiTitles from "../../common/modules/Title/LiTiles"
function LandingFavorite() {
  return (
    <>
    <LiTitles title=" محبوب ترین دسته بندی ها " disc=" محبوب ترین دسته بندی ها"/>
  
      <div className="container w-full m-auto relative my-20 ">
      <img
          className="container absolute  -z-10   w-full"
          src="/public/images/icons/Rectangle-gonda.png"
          alt="rec"
        />
        <div className="flex justify-center items-center gap-20 p-2 content-center "> 
          {FavoriteCats.map((item) => (
            <div key={item.id} className="rotate-45 flex flex-col hoverscale justify-center rounded-3xl bg-slate-50 p-10 items-center w-40 h-40 hover:bg-orange-400 shadow-inner mt-36">
                <div className="-rotate-45 ">
              <h1  className="font-extrabold text-xl text-cyanlogin">{item.name}</h1>
              <img className=" items-center"  src={item.img} alt="item.img" width={100} height={100} />

                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LandingFavorite;

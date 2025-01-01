import React from "react";
import FavoriteCats from "../../../mock/FavorieCats";
import LiTitles from "../../common/modules/Title/LiTiles"
function LandingFavorite() {
  return (
    <div className=" container">
    <LiTitles title=" محبوب ترین دسته بندی ها " disc=" محبوب ترین دسته بندی ها"/>
  
      <div className=" container  relative my-10 ">
      <img
          className="absolute bottom-0 -z-10 "
          src="/public/images/icons/Rectangle-gonda.png"
          alt="rec"
        />
        <div className="flex justify-center items-center gap-20 p-2 content-center"> 
          {FavoriteCats.map((item) => (
            <div key={item.id} className="rotate-45 flex flex-col mt-12 rounded-3xl bg-slate-50 p-10 items-center w-52 h-52 hover:bg-orange-400 shadow-inner shadow-lg">
                <div className="-rotate-45">
              <h1  className="font-extrabold text-3xl text-cyanlogin">{item.name}</h1>
              <img className="p-4 items-center"  src={item.img} alt="item.img" width={100} height={100} />

                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingFavorite;

import React from "react";
import { Link } from "react-router";

function NewsSuggestion({ items }) {
  return (
    <div className="w-full border shadow-lg flex flex-col p-3 bg-white rounded-3xl  mx-auto max-lg:w-full">
      <span className="my-2">
        <h1 className="font-extrabold">مطالب پیشنهادی</h1>
        <h6 className="font-extralight text-sm">
          این مطالب هم میتونه براتون جالب باشه{" "}
        </h6>
      </span>
      <div className="flex flex-col gap-4">

      {items?.slice(4, 7).map((item) => (<>
          <Link key={item.id} to={`/news/${item.id}`} className="border flex p-2 rounded-3xl bg-gray-200 h-20 relative">
          <span className="flex flex-col  ">
            <h1 className="text-sky-800">{`${item.title.slice(0, 8)} ...`}</h1>
            <h3 className="text-orange-500">مشاهده مطلب</h3>
          </span>
          <img
            src={
                item.currentImageAddressTumb
                ? item.currentImageAddressTumb
                : item.addUserProfileImage
                ? item.addUserProfileImage
                : fallbackimage
            }
            alt="sda"
            className="rounded-full h-24 absolute -left-3 top-0 m-auto -translate-y-2 border-lime-500 border-4"
            />
        </Link>
      </>
      ))}
      </div>
    </div>
  );
}

export default NewsSuggestion;

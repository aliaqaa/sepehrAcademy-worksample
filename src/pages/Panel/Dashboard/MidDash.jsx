import React, { useEffect } from "react";
import useNews from "../../../hooks/useNews";
import { ScaleLoader } from "react-spinners";

function MidDash() {
  const { news, loading, error, fetchNewsWithPagination } = useNews();

  useEffect(() => {
    fetchNewsWithPagination();
  }, []);
  if (loading) {
    return (
      <div className="container flex content-center items-center align-top">
        <ScaleLoader color="#36D7B7" className="m-auto" loading={loading} />
      </div>
    ); // Optional loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Optional error handling
  }

  return (
    <div className="bg-[#F6FFFF] flex-col shadow-xl p-5 rounded-lg relative">
      <img
        src="/public/images/icons/Vector (1).png"
        alt="bell"
        className="absolute -top-3 left-5 bg-white border p-2 rounded-3xl"
      />
      <h1 className="text-2xl text-start font-extrabold">
        جدید ترین اخبار و مقالات
      </h1>
      <div className="mt-5 ">
        {news?.news?.slice(1, 4).map((newItem) => (
          <>
            <span key={newItem.id} className="flex justify-between">
              <h2  className="text-start p-2">
                {newItem.title}
              </h2>
              <p>{newItem.updateDate}</p>
            </span>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default MidDash;

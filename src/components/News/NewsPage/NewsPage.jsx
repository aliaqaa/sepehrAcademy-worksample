import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useNews from "../../../hooks/useNews";
import { FaUser } from "react-icons/fa";
import { CgData, CgUserList } from "react-icons/cg";
import NewsSuggestion from "../NewsSuggestion/NewsSuggestion";
import text from "../../../mock/CoursePageContentText";

function NewsPage({
  // Define your prop types here if using PropTypes or TypeScript
}) {
  const { news, loading, error, fetchNewsWithPagination } = useNews();
  const [isExpanded, setIsExpanded] = useState(false);
  const params = useParams();
  const newsId = params.id;

  useEffect(() => {
    fetchNewsWithPagination();
  }, [fetchNewsWithPagination]);

  const filteredNews = news?.news?.find((newItem) => newItem.id === newsId);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!filteredNews) {
    return <div>No news found with the given ID.</div>;
  }

  const truncatedText = text.slice(0, 1000) + "...";

  return (
    <div className=" container  flex w-full justify-center gap-4 mx-10 ">
      <div id="rightside" className="w-1/2 items-center max-md:w-full">
        <div
          id="topright"
          className="linear-gradient p-14 roundedtr rounded-md flex flex-col justify-center"
        >
          <li className="disc-green text-start font-extrabold text-3xl">{filteredNews.title}</li>
          <div className="font-extralight flex mt-4">
            <span className="font-extralight flex p-2 items-center gap-2">
              {filteredNews.addUserFullName}
              <FaUser className="text-gray-500" />
            </span>
            <span className="font-extralight flex p-2 items-center gap-2">
              {filteredNews.totalCount}
              <CgUserList />
            </span>
            <span className="font-extralight flex p-2 items-center gap-2">
              {filteredNews.updateDate}
              <CgData />
            </span>
          </div>
        </div>
        <div className="relative p-4">
          <p className="bg-white p-3 rounded-3xl border fade-effect">
            {isExpanded ? text : truncatedText}
          </p>
          <button onClick={() => setIsExpanded(!isExpanded)} className="read-more w-full ">
            {isExpanded ? " مطالعه کمتر" : " مطالعه بیشتر"}
          </button>
        </div>
      </div>
      <div id="lefside" className="flex flex-col gap-4 max-md:hidden">
        <img src="/images/post/Group 37.png" alt="News illustration" className="w-full" />
        <NewsSuggestion items={news.news} />
        <NewsSuggestion items={news.news} />
        <NewsSuggestion items={news.news} />
      </div>
    </div>
  );
}

export default NewsPage;
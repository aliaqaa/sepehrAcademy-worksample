import React, { useEffect, useState } from "react";
import NewsPaginationTopSort from "../NewsPaginationTopSort/NewsPaginationTopSort";
import useNews from "../../../hooks/useNews";
import NewsCard from "../NewsCard/NewsCard";
import NewsSuggestion from "../NewsSuggestion/NewsSuggestion";
import { ScaleLoader } from "react-spinners";
import Pagination from "../../common/modules/Pagination/Pagination";

function NewsPagination() {
  const { news, loading, error, fetchNewsWithPagination } = useNews();
  const [newsState, setNewsState] = useState(news);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 9; 
  const totalPages = Math.ceil((newsState?.news?.length || 0) / itemsPerPage); 
  
  useEffect(() => {
    fetchNewsWithPagination(currentPage, itemsPerPage);
  }, [currentPage, fetchNewsWithPagination]);

 
  useEffect(() => {
    setNewsState(news);
  }, [news]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ScaleLoader color="#36D7B7" loading={loading} />
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = newsState?.news?.slice(startIndex, endIndex) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <NewsPaginationTopSort />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {currentNews.map((item) => (
            <NewsCard item={item} key={item.id} />
          ))}
        </div>

        <div className="w-full  flex flex-col gap-6">
          <NewsSuggestion items={newsState.news} />
          <NewsSuggestion items={newsState.news} />
          <NewsSuggestion items={newsState.news} />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default NewsPagination;
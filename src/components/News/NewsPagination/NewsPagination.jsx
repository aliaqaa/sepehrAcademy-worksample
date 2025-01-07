import React, { useEffect } from "react";  
import NewsPaginationTopSort from "../NewsPaginationTopSort/NewsPaginationTopSort";  
import useNews from "../../../hooks/useNews";  
import NewsCard from "../NewsCard/NewsCard";  

function NewsPagination() {  
  const { news, loading, error, fetchNewsWithPagination } = useNews();  

  useEffect(() => {  
    fetchNewsWithPagination();  
  }, [fetchNewsWithPagination]);  

  if (loading) {  
    return <div>Loading...</div>;  
  }  

  if (error) {  
    return <div>Error: {error.message}</div>;  
  }  
  console.log(news)
  return (  
    <div className="w-full">  
      <NewsPaginationTopSort />  
      {news?.length > 0 ? (  
        news.map((item) => (  
          <div key={item.id}>  
            <NewsCard item={item} />  
          </div>  
        ))  
      ) : (  
        <div>No news available.</div>  
      )}  
    </div>  
  );  
}  

export default NewsPagination;
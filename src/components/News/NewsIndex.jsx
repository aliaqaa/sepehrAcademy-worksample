import React from "react";
import NewsHero from "./NewsHero/NewsHero";
import NewsPagination from "./NewsPagination/NewsPagination";
import NewsSuggestion from "./NewsSuggestion/NewsSuggestion";

function NewsIndex() {
  return (
    <>
      <NewsHero />
      
        <NewsPagination />
      
    </>
  );
}

export default NewsIndex;

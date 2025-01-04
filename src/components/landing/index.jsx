import React from "react";
import LandingHero from "./LandingHero/LandingHero";
import LandingFavorite from "./LandingFavorite/LandingFavorite";
import CourseCategory from "./LandingCourseCategory/CourseCategory";
import LandingTeacherCat from "./landingTeacherCat/landingTeacherCat";
import LandingServices from "./LandingServices/LandingServices";
import LandingArticleGrid from "./LandingArticleGrid/LandingArticleGrid";

function LandingIndex() {
  return (
    <>
      <LandingHero />
      <LandingFavorite />
      <CourseCategory />
      <LandingTeacherCat  />
      <LandingServices  />
      <LandingArticleGrid />

    </>
  );
}

export default LandingIndex;

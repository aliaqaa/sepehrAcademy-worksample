import React from "react";
import LandingHero from "../../components/modules/LandingHero/LandingHero";
import LandingFavorite from "../../components/modules/LandingFavorite/LandingFavorite";
import CourseCategory from "../../components/modules/LandingCourseCategory/CourseCategory";
import LandingTeacherCat from "../../components/modules/landingTeacherCat/landingTeacherCat";
import LandingServices from "../../components/modules/LandingServices/LandingServices";
import LandingArticleGrid from "../../components/modules/LandingArticleGrid/LandingArticleGrid";

function Landing() {
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

export default Landing;

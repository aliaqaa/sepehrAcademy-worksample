import NavigationSlider from "../NavigationSlider/NavigationSlider";
import React from "react";
import LiTitles from "../../common/modules/Title/LiTiles";

function CourseCategory() {
  return (
    <div className="container ">
      <LiTitles
        title="دوره های آموزشی"
        disc=" به روز ترین دوره هایی که میتونید پیدا کنید"
      />

      <NavigationSlider />
    </div>
  );
}

export default CourseCategory;

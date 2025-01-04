import React, { useEffect } from "react";
import { useParams } from "react-router";
import useCourse from "../../hooks/useCourse";
import { ScaleLoader } from "react-spinners";
import NotFound from "../../pages/NotFound/NotFound";
import fallbackimage from "/public/images/post/next.png";

import CoursePageTop from "./CoursePageTop/CoursePageTop";
import CoursePageContent from "./CoursePageContent/CoursePageContent";
import CoursePageSidebar from "./CoursePageSidebar/CoursePageSidebar";

function CoursePageIndex() {
  const params = useParams();
  const { courses, loading, fetchTopCourses } = useCourse();

  useEffect(() => {
    fetchTopCourses(999);
  }, [fetchTopCourses]);

  const courseId = params.id;
  const filteredCourse = courses.find((course) => course.courseId === courseId);

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

  if (!filteredCourse) {
    return <NotFound />;
  }
console.log(courses)
  return (
    <div className="container flex flex-col items-center w-full">
      <CoursePageTop filteredCourse={filteredCourse}/>
      <div className="flex justify-center"> 
        <CoursePageContent courseId={courseId}/>
        <CoursePageSidebar filteredCourse={filteredCourse}/>
      </div>
    </div>
  );
}

export default CoursePageIndex;

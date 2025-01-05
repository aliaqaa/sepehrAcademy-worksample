import React, { useEffect, useState } from "react";  
import useCourse from "../../../hooks/useCourse";  
import CourseCart from "/src/components/Courses/CourseCart/CourseCart";  

import CoursesBoxTopSort from "../CoursesBoxTopSort/CoursesBoxTopSort";  
import CourseCart2 from "../CourseCart/CourseCart2";
import { ScaleLoader } from "react-spinners";

function CoursesPagination({ query, setQuery }) {  
  const { courses, loading, error, fetchCoursesWithPagination } = useCourse();  
  const [viewMode, setViewMode] = useState("grid"); 

  useEffect(() => {  
    fetchCoursesWithPagination(query);  
  }, [fetchCoursesWithPagination, query]);  

  const handleViewChange = (newMode) => {  
    setViewMode(newMode);  
  };  

  if (loading) return   <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }}
>
  <ScaleLoader color="#36D7B7" loading={loading} />
</div>;  
  if (error) return <div>Error loading courses.</div>;  

  return (  
    <div className="flex flex-col">  
      <CoursesBoxTopSort setGrid={handleViewChange} />  
      {viewMode === "grid" ? (  
        <div className="w-full grid grid-cols-3 gap-5 p-4">  
          {courses.courseFilterDtos?.map((course) => (  
            <CourseCart key={course.courseId} course={course} />  
          ))}  
        </div>  
      ) : (  
        <div className="w-full flex flex-col p-4">  
          {courses.courseFilterDtos?.map((course) => (  
            <div key={course.courseId} className="mb-4">  
              <CourseCart2 course={course} />  
            </div>  
          ))}  
        </div>  
      )}  
    </div>  
  );  
}  

export default CoursesPagination;
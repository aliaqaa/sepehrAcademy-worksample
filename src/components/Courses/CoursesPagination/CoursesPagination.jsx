import React, { useEffect, useState } from "react";
import useCourse from "../../../hooks/useCourse";
import CourseCart from "/src/components/Courses/CourseCart/CourseCart";
import CoursesBoxTopSort from "../CoursesBoxTopSort/CoursesBoxTopSort";
import CourseCart2 from "../CourseCart/CourseCart2";
import { ScaleLoader } from "react-spinners";
import Pagination from "../../common/modules/Pagination/Pagination";

function CoursesPagination({ query, setQuery }) {
  const { courses, loading, error, fetchCoursesWithPagination } = useCourse();
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = courses.totalPages || 1;

  useEffect(() => {
    fetchCoursesWithPagination({ ...query, page: currentPage });
  }, [fetchCoursesWithPagination, query, currentPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1008px)").matches) {
        setViewMode("list");
      } else {
        setViewMode("grid");
      }
    };

    // Set the initial view mode based on the current screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewChange = (newMode) => {
    setViewMode(newMode);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading)
    return (
      <div className="container flex content-center items-center align-top">
        <ScaleLoader color="#36D7B7" className="m-auto" loading={loading} />
      </div>
    );

  if (error) return <div className="m-auto">Nothing to show</div>;

  return (
    <div className="flex flex-col">
      <CoursesBoxTopSort setGrid={handleViewChange} />
      {viewMode === "grid" ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
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
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default CoursesPagination;
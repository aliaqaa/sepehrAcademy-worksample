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

  // Extract the current page from the query string
  useEffect(() => {
    const params = new URLSearchParams(query);
    const page = parseInt(params.get("PageNumber")) || 1;
    setCurrentPage(page);
  }, [query]);

  // Fetch courses when the query or currentPage changes
  useEffect(() => {
    fetchCoursesWithPagination({ ...query, PageNumber: currentPage });
  }, [fetchCoursesWithPagination, query, currentPage]);

  // Handle view mode changes based on screen size
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

  // Handle view mode change (grid/list)
  const handleViewChange = (newMode) => {
    setViewMode(newMode);
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);

      // Update the query string with the new page number
      const params = new URLSearchParams(query);
      params.set("PageNumber", page);
      setQuery(params.toString());
    }
  };

  // Loading state
  if (loading)
    return (
      <div className="container flex content-center items-center align-top">
        <ScaleLoader color="#36D7B7" className="m-auto" loading={loading} />
      </div>
    );

  // Error state
  if (error) return <div className="m-auto">Nothing to show</div>;

  return (
    <div className="flex flex-col">
      {/* Top sort and view mode toggle */}
      <CoursesBoxTopSort setGrid={handleViewChange} />

      {/* Course list/grid */}
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

      {/* Pagination */}
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
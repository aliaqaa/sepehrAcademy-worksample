import React, { useEffect } from "react";
import { CiFilter } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import useCourse from "../../../hooks/useCourse";
import CoursesFilterBoxAccordion from "../CoursesFilterBoxAccordion/CoursesFilterBoxAccordion";

function CoursesFilterBox({ query, setQuery }) {
  const {
    courses: courseLevel,
    loading: loadingLevels,
    fetchAllCourseLevelApi,
  } = useCourse();
  const {
    courses: courseTech,
    loading: loadingTechs,
    fetchTechnologiesApi,
  } = useCourse();
  const {
    courses: courseType,
    loading: loadingTypes,
    fetchCourseTypesApi,
  } = useCourse();

  useEffect(() => {
    fetchAllCourseLevelApi();
    fetchTechnologiesApi();
    fetchCourseTypesApi();
  }, [fetchAllCourseLevelApi, fetchTechnologiesApi, fetchCourseTypesApi]);

  // Check if any data is loading
  const isLoading = loadingLevels || loadingTechs || loadingTypes;

  return (
    <div className="border rounded-xl bg-white w-60 p-2">
      <div className="flex bg-gray-400 m-2 justify-between rounded-md text-white">
        <span className="flex p-3 items-center">
          <CiFilter />
          <p>فیلتر ها</p>
        </span>
        <button className="text-red-400 m-3" onClick={() => setQuery("")}>
          <RiDeleteBin5Line />
        </button>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div> // Show loading indicator
        ) : (
          <>
            <CoursesFilterBoxAccordion courses={courseLevel} title="سطح" />
            <CoursesFilterBoxAccordion courses={courseTech} title="تکنولوژی" />
            <CoursesFilterBoxAccordion courses={courseType} title="نوع دوره" />
          </>
        )}
      </div>
    </div>
  );
}

export default CoursesFilterBox;

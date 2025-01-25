import React, { useEffect, useState, useMemo } from "react";
import { CiFilter } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import useCourse from "../../../hooks/useCourse";
import CoursesFilterBoxAccordion from "../CoursesFilterBoxAccordion/CoursesFilterBoxAccordion";

function CoursesFilterBox({ query, setQuery }) {
  const [filters, setFilters] = useState({
    Level: [], // Array for selected levels
    category: [], // Array for selected categories
    type: [], // Array for selected types
    PageNumber: 1,
    Sort: "Active",
  });

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
    const fetchData = async () => {
      try {
        await fetchAllCourseLevelApi();
        await fetchTechnologiesApi();
        await fetchCourseTypesApi();
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const queryString = useMemo(() => {
    return `?PageNumber=${filters.PageNumber}&RowsOfPage=10&SortingCol=${filters.Sort}${
      filters.Level.length > 0 ? `&courseLevelId=${filters.Level.join(",")}` : ""
    }${filters.category.length > 0 ? `&ListTech=${filters.category.join(",")}` : ""}${
      filters.type.length > 0 ? `&CourseTypeId=${filters.type.join(",")}` : ""
    }`;
  }, [filters]);

  useEffect(() => {
    setQuery(queryString);
  }, [queryString, setQuery]);

  const handleResetFilters = () => {
    setFilters({
      Level: [],
      category: [],
      type: [],
      PageNumber: 1,
      Sort: "Active",
    });
  };

  const isLoading = loadingLevels || loadingTechs || loadingTypes;

  return (
    <div className="border rounded-xl bg-white w-60 p-2">
      <div className="flex bg-gray-400 m-2 justify-between rounded-md text-white">
        <span className="flex p-3 items-center">
          <CiFilter />
          <p>فیلتر ها</p>
        </span>
        <button className="text-red-400 m-3" onClick={handleResetFilters}>
          <RiDeleteBin5Line />
        </button>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <CoursesFilterBoxAccordion
              courses={courseLevel}
              title="سطح"
              filterKey="Level"
              filters={filters}
              setFilters={setFilters}
            />
            <CoursesFilterBoxAccordion
              courses={courseTech}
              title="تکنولوژی"
              filterKey="category"
              filters={filters}
              setFilters={setFilters}
            />
            <CoursesFilterBoxAccordion
              courses={courseType}
              title="نوع دوره"
              filterKey="type"
              filters={filters}
              setFilters={setFilters}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CoursesFilterBox;
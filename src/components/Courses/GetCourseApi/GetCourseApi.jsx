import React, { useEffect } from "react";

function GetCourseApi({
  PageNumber = 1,
  Sort = "Active",
  Query = "",
  Level,
  type,
  category,
  costup,
  costdown,
  teacherId,
  setQuery,
}) {
  const buildApiUrl = () => {
    return `?PageNumber=${PageNumber}&RowsOfPage=10&SortingCol=${Sort}${
      Level ? `&courseLevelId=${Level}` : ""
    }${type ? `&CourseTypeId=${type}` : ""}${
      category ? `&ListTech=${category}` : ""
    }${Query !== "" ? `&Query=${Query}` : ""}${
      costdown ? `&CostDown=${costdown}` : ""
    }${costup ? `&CostUp=${costup}` : ""}${
      teacherId ? `&TeacherId=${teacherId}` : ""
    }`;
  };

  useEffect(() => {
    const apiUrl = buildApiUrl();
    if (setQuery) {
      setQuery(apiUrl); 
    }
  }, [PageNumber, Sort, Query, Level, type, category, costup, costdown, teacherId]);

  return null;
}

export default GetCourseApi;

async function GetCourseApi(
    PageNumber,
    Sort,
    Query,
    Level,
    type,
    category,
    costup,
    costdown,
    teacherId,
    setQuery
  ) {
    try {
      const getApi = (
        `/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=10&SortingCol=${Sort}${
          Level ? `&courseLevelId=${Level}` : ""
        }${type ? `&CourseTypeId=${type}` : ""}${
          category ? `&ListTech=${category}` : ""
        }${Query !== "" ? `&Query=${Query}` : ""}${
          costdown ? `&CostDown=${costdown}` : ""
        }${costup ? `&CostUp=${costup}` : ""}${
          teacherId ? `&TeacherId=${teacherId}` : ""
        }`
      );
    } catch (error) {
      console.error(error);
    }
  }
  export default GetCourseApi
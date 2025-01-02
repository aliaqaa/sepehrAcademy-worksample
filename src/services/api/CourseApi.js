const baseUrl = import.meta.env.VITE_BASE_API_URL;

const fetchApi = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getCoursesTopApi = (Count) => {
  return fetchApi(`${baseUrl}Home/GetCoursesTop?Count=${Count}`);
};

export const getCourseDetailsApi = (CourseId) => {
  return fetchApi(`${baseUrl}Home/GetCourseDetails?CourseId=${CourseId}`);
};

export const getCoursesWithPaginationApi = (params) => {
  const queryString = new URLSearchParams(params).toString();
  return fetchApi(`${baseUrl}Home/GetCoursesWithPagination?${queryString}`);
};

export const getAllCourseLevelApi = () => {
  return fetchApi(`${baseUrl}CourseLevel/GetAllCourseLevel`);
};

export const getCourseTypesApi = () => {
  return fetchApi(`${baseUrl}CourseType/GetCourseTypes`);
};

export const getTechnologiesApi = () => {
  return fetchApi(`${baseUrl}Home/GetTechnologies`);
};

export const getCoursesCommentApi = (CourseId) => {
  return fetchApi(`${baseUrl}Course/GetCourseCommnets/${CourseId}`);
};

export const sendCommentApi = (payload) => {
  return fetchApi(`${baseUrl}Course/AddCommentCourse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'useMultipartForm': true,
    },
    body: JSON.stringify(payload),
  });
};

export const addReplyCourseCommentApi = (payload) => {
  return fetchApi(`${baseUrl}Course/AddReplyCourseComment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'useMultipartForm': true,
    },
    body: JSON.stringify(payload),
  });
};

export const addCourseCommentLikeApi = (CourseCommandId) => {
  return fetchApi(`${baseUrl}Course/AddCourseCommentLike?CourseCommandId=${CourseCommandId}`, {
    method: 'POST',
  });
};

export const addCourseCommentDissLikeApi = (CourseCommandId) => {
  return fetchApi(`${baseUrl}Course/AddCourseCommentDissLike?CourseCommandId=${CourseCommandId}`, {
    method: 'POST',
  });
};

export const addCourseLikeApi = (CourseId) => {
  return fetchApi(`${baseUrl}Course/AddCourseLike?CourseId=${CourseId}`, {
    method: 'POST',
  });
};

export const addCourseDissLikeApi = (CourseId) => {
  return fetchApi(`${baseUrl}Course/AddCourseDissLike?CourseId=${CourseId}`, {
    method: 'POST',
  });
};

export const addCourseReserveApi = (payload) => {
  return fetchApi(`${baseUrl}CourseReserve/ReserveAdd`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

export const addCourseFavoriteApi = (payload) => {
  return fetchApi(`${baseUrl}Course/AddCourseFavorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

export const deleteCourseFavoriteApi = (payload) => {
  return fetchApi(`${baseUrl}Course/DeleteCourseFavorite`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'useMultipartForm': true,
    },
    body: JSON.stringify({ CourseFavoriteId: payload.CourseFavoriteId }),
  });
};

export const getSubCourseCommentApi = (CommentId, CourseId) => {
  return fetchApi(`${baseUrl}Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`);
};

export const getSubNewsCommentApi = (CommentId) => {
  return fetchApi(`${baseUrl}News/GetRepliesComments?Id=${CommentId}`);
};

export const addCourseStarsApi = (payload) => {
  return fetchApi(`${baseUrl}Course/SetCourseRating?CourseId=${payload.courseId}&RateNumber=${payload.rate}`, {
    method: 'POST',
  });
};
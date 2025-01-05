import { useState, useEffect, useCallback } from 'react';  
import {  
  getCoursesTopApi,  
  getCourseDetailsApi,  
  getCoursesWithPaginationApi,  
  getAllCourseLevelApi,  
  getCourseTypesApi,  
  getTechnologiesApi,  
  getCoursesCommentApi,  
  sendCommentApi,  
  addReplyCourseCommentApi,  
  addCourseCommentLikeApi,  
  addCourseCommentDissLikeApi,  
  addCourseLikeApi,  
  addCourseDissLikeApi,  
  addCourseReserveApi,  
  addCourseFavoriteApi,  
  deleteCourseFavoriteApi,  
  getSubCourseCommentApi,  
  getSubNewsCommentApi,  
  addCourseStarsApi,  
} from '../services/api/CourseApi'; 

const useCourse = () => {  
  const [courses, setCourses] = useState([]);  
  const [courseDetails, setCourseDetails] = useState(null);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  

  // Fetch top courses  
  const fetchTopCourses = useCallback(async (count) => {  
    setLoading(true);  
    try {  
      const data = await getCoursesTopApi(count);  
      setCourses(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  

  // Fetch course details  
  const fetchCourseDetails = useCallback(async (courseId) => {  
    setLoading(true);  
    try {  
      const data = await getCourseDetailsApi(courseId);  
      setCourseDetails(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  

  // Fetch courses with pagination  
  const fetchCoursesWithPagination = useCallback(async (params) => {  
    setLoading(true);  
    try {  
      const data = await getCoursesWithPaginationApi(params);  
      setCourses(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  
  const fetchCoursesCommentApi = useCallback(async (params) => {  
    setLoading(true);  
    try {  
      const data = await getCoursesCommentApi(params);  
      setCourses(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  
  const fetchAllCourseLevelApi = useCallback(async () => {  
    setLoading(true);  
    try {  
      const data = await getAllCourseLevelApi();  
      setCourses(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  
  const fetchCourseTypesApi = useCallback(async () => {  
    setLoading(true);  
    try {  
      const data = await getCourseTypesApi();  
      setCourses(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  
  const fetchTechnologiesApi = useCallback(async () => {  
    setLoading(true);  
    try {  
      const data = await getTechnologiesApi();  
      setCourses(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  


  const resetError = () => setError(null);  

  return {  
    courses,  
    courseDetails,  
    loading,  
    error,  
    fetchTopCourses,  
    fetchCourseDetails,  
    fetchCoursesWithPagination,  
    resetError,  
    fetchCoursesCommentApi,
    fetchAllCourseLevelApi,
    fetchCourseTypesApi,
    fetchTechnologiesApi,

  };  
};  

export default useCourse;
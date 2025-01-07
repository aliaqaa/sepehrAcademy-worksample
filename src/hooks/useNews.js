import { useState, useEffect, useCallback } from 'react';  
import {  
  getLatestNewsApi,  
  getNewsDetailsApi,  
  getNewsWithPaginationApi,  
  getNewsCommentsApi,  
  sendCommentApi,  
} from '/src/services/api/NewsApi'; // Adjust the path according to your project structure  

const useNews = () => {  
  const [news, setNews] = useState([]);  
  const [newsDetails, setNewsDetails] = useState(null);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  

  // Fetch latest news  
  const fetchLatestNews = useCallback(async (count) => {  
    setLoading(true);  
    try {  
      const data = await getLatestNewsApi(count);  
      setNews(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  

  // Fetch news details  
  const fetchNewsDetails = useCallback(async (newsId) => {  
    setLoading(true);  
    try {  
      const data = await getNewsDetailsApi(newsId);  
      setNewsDetails(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  

  // Fetch news with pagination  
  const fetchNewsWithPagination = useCallback(async (params) => {  
    setLoading(true);  
    try {  
      const data = await getNewsWithPaginationApi(params);  
      setNews(data);  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  

  // Fetch news comments  
  const fetchNewsComments = useCallback(async (newsId) => {  
    setLoading(true);  
    try {  
      const data = await getNewsCommentsApi(newsId);  
      return data; // Assuming you might want to use this information somewhere  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  

  // Send a comment  
  const submitComment = useCallback(async (payload) => {  
    setLoading(true);  
    try {  
      const data = await sendCommentApi(payload);  
      return data; // Optionally return the result of the comment submission  
    } catch (err) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  }, []);  

  const resetError = () => setError(null);  

  return {  
    news,  
    newsDetails,  
    loading,  
    error,  
    fetchLatestNews,  
    fetchNewsDetails,  
    fetchNewsWithPagination,  
    fetchNewsComments,  
    submitComment,  
    resetError,  
  };  
};  

export default useNews;
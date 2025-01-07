const baseUrl = import.meta.env.VITE_BASE_API_URL;  

const fetchApi = async (url, options = {}) => {  
  const response = await fetch(url, options);  
  if (!response.ok) {  
    throw new Error(`HTTP error! status: ${response.status}`);  
  }  
  return response.json();  
};  

export const getLatestNewsApi = (count) => {  
  return fetchApi(`${baseUrl}News?PageNumber=1&RowsOfPage=${count}`);  
};  

export const getNewsDetailsApi = (newsId) => {  
  return fetchApi(`${baseUrl}News/${newsId}`);  
};  

export const getNewsWithPaginationApi = (params) => {  
  const queryString = new URLSearchParams(params).toString();  
  return fetchApi(`${baseUrl}News?${queryString}`);  
};  

export const getNewsCommentsApi = (newsId) => {  
  return fetchApi(`${baseUrl}News/GetNewsComments?NewsId=${newsId}`);  
};  

export const sendCommentApi = (payload) => {  
  return fetchApi(`${baseUrl}News/CreateNewsComment`, {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json',  
      'useMultipartForm': true,  
    },  
    body: JSON.stringify(payload),  
  });  
};  

// Additional API methods can be added in a similar fashion...
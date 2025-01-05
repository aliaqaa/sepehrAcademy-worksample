// CoursesPaginationQuery.js  
import React, { useEffect, useState } from 'react';  

function CoursesPaginationQuery({  
  pageNumber,  
  sort,  
  level,  
  type,  
  category,  
  costup,  
  costdown,  
  teacherId,  
  onQueryChange // New prop to call when query changes  
}) {  
  const [query, setQuery] = useState('');  

  useEffect(() => {  
    // Construct the query based on the passed props  
    const baseQuery = `?page=${pageNumber}&sort=${sort}`;  
    const filters = [];  

    if (level) filters.push(`level=${level}`);  
    if (type) filters.push(`type=${type}`);  
    if (category) filters.push(`category=${category}`);  
    if (costup) filters.push(`costup=${costup}`);  
    if (costdown) filters.push(`costdown=${costdown}`);  
    if (teacherId) filters.push(`teacherId=${teacherId}`);  

    const finalQuery = baseQuery + (filters.length > 0 ? '&' + filters.join('&') : '');  
    setQuery(finalQuery);  
    onQueryChange(finalQuery); // Trigger callback when query changes  
  }, [pageNumber, sort, level, type, category, costup, costdown, teacherId, onQueryChange]);  

  return <div>CoursesPaginationQuery: {query}</div>;  
}  

export default CoursesPaginationQuery;
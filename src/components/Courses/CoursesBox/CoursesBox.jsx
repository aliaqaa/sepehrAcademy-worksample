import React, { useState } from 'react'
import CoursesFilterBox from '../CoursesFilterBox/CoursesFilterBox'
import CoursesPagination from '../CoursesPagination/CoursesPagination'

function CoursesBox() {
    const [query,setQuery] =useState('?PageNumber=1&RowsOfPage=9&SortingCol=Active&SortType=DESC&TechCount=0')
  return (
    <div className='flex justify-center'>
      <CoursesFilterBox query={query} setQuery={setQuery}/>
      <CoursesPagination query={query} setQuery={setQuery}/>
    
    </div>
  )
}

export default CoursesBox
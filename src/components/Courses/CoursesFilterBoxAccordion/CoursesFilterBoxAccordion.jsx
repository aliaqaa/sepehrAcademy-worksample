import React, { useState } from "react";

function CoursesFilterBoxAccordion({ courses, title, filterKey, filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const handleCheckboxChange = (id) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey] === id ? null : id, 
    }));
  };
  return (
    <div className="flex flex-col justify-between w-full gap-5 bg-body shadow-inner p-5 rounded-t-xl">
      <button onClick={toggleAccordion} className="flex justify-between">
        <span>{title}</span> {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <div>
          {courses.map((course) => (
            <label key={course.id} className="flex justify-between">
              {course.levelName || course.techName || course.typeName}
              <input
                type="checkbox"
                checked={filters[filterKey] === course.id}
                onChange={() => handleCheckboxChange(course.id)}
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoursesFilterBoxAccordion;

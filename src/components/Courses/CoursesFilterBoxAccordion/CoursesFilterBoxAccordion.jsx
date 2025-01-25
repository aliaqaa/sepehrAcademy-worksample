import React, { useState } from "react";

function CoursesFilterBoxAccordion({ courses, title, filterKey, filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const handleCheckboxChange = (id) => {
    setFilters((prev) => {
      const currentValues = prev[filterKey];
      const newValues = currentValues.includes(id)
        ? currentValues.filter((value) => value !== id) // Remove if already selected
        : [...currentValues, id]; // Add if not selected

      return {
        ...prev,
        [filterKey]: newValues,
      };
    });
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
                checked={filters[filterKey].includes(course.id)} // Check if the item is in the array
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
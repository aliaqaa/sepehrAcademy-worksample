import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";

function CoursesFilterBoxAccordion({ courses, loading, title }) {
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev); 
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {" "}
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            onClick={toggleAccordion}
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right  text-gray-500 border border-b-0  gap-3 ${
              isOpen ? "bg-green-500" : ""
            }`}
            aria-expanded={isOpen}
            aria-controls="accordion-collapse-body-1"
          >
            <span className="">{title}</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transition-transform  ${
                isOpen ? "rotate-180" : ""
              }`} // Rotate icon based on state
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${isOpen ? "block " : "hidden"}`} // Show/hide based on state
          aria-labelledby="accordion-collapse-heading-1"
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <ScaleLoader color="#36D7B7" loading={loading} />
            </div>
          ) : courses.length === 0 ? (
            <p>No courses available.</p>
          ) : (
            courses.map((course) => (
              <div key={course.id} className="flex justify-around ">
                <label htmlFor="levels">{course.levelName || course.techName ||course.typeName} </label>
                <input name="levels" type="checkbox" key={course.courseId } />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default CoursesFilterBoxAccordion;

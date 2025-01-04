import React, { useState } from "react";
import "/src/styles/CoursePageContent.css"; 
import text from "../../../mock/CoursePageContentText";
import { FaDownload } from "react-icons/fa";
import useCourse from "../../../hooks/useCourse";

function CoursePageContent({courseId}) {
  const { courses, loading, fetchCoursesCommentApi } = useCourse(courseId);
  const [isExpanded, setIsExpanded] = useState(false);
  const [accordionStates, setAccordionStates] = useState([false, false, false]); 
  const truncatedText = text.slice(0, 1000) + "..."; 

  const toggleAccordion = (index) => {
    const newExpandedStates = [...accordionStates];
    newExpandedStates[index] = !newExpandedStates[index]; 
    setAccordionStates(newExpandedStates);
  };

  return (
    <div className="flex flex-col w-3/5 text-start mt-5 mx-5">
      <h1 className="font-extrabold text-3xl">توضیحات</h1>
      <div className="relative">
        <p className="bg-white p-3 rounded-3xl border fade-effect">
          {isExpanded ? text : truncatedText}
        </p>
        <span onClick={() => setIsExpanded(!isExpanded)} className="read-more">
          {isExpanded ? " مطالعه کمتر" : " مطالعه بیشتر"}
        </span>
      </div>

      <h1 className="font-extrabold text-3xl my-5 ">سرفصل ها</h1>
      <div id="accordion-collapse" data-accordion="collapse">
        {["پیش نیاز", "سرفصل 2", "سرفصل 3"].map(
          (
            title,
            index 
          ) => (
            <div key={index} className="">
              <h2 id={`accordion-collapse-heading-${index + 1}`}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 gap-3 ${
                    accordionStates[index]
                      ? "bg-[#00E2DC] text-white"
                      : "bg-white text-gray-500"
                  }`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={accordionStates[index]}
                  aria-controls={`accordion-collapse-body-${index + 1}`}
                >
                  <span>{title}</span>
                  <span className="flex gap-2 items-center">

                  <h1>3 جلسه 1ساعت</h1>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transition-transform duration-200 ${
                      accordionStates[index] ? "rotate-180" : ""
                    }`}
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
                  </span>
                </button>
              </h2>
              {accordionStates[index] && (
                <div
                  id={`accordion-collapse-body-${index + 1}`}
                  className="p-5  rounded-xl border-gray-200"
                  aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                >
                 <span className="bg-white p-4 border rounded-xl w-full flex justify-between cursor-pointer text-green-500">
                  <p>قسمت 1</p>
                  <FaDownload />

                 </span>
                 <span className="bg-white p-4 border rounded-xl w-full flex justify-between cursor-pointer text-green-500">
                  <p>قسمت 2</p>
                  <FaDownload />

                 </span>
                 <span className="bg-white p-4 border rounded-xl w-full flex justify-between cursor-pointer text-green-500">
                  <p>قسمت 3</p>
                  <FaDownload />

                 </span>
                </div>
              )}
            </div>
          )
        )}
      </div>
      <h1 className="font-extrabold text-3xl my-5 ">نظرات</h1>
        {courses.map(course =>(
          <div key={crypto.randomUUID()} className=" border bg-white rotate-3 mt-2 ">
            <p>{}</p>
            <p>کاربر: {}</p>
          </div>
       ) )}
    </div>
  );
}

export default CoursePageContent;

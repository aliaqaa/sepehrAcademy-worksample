import React from 'react'
import { FaMoneyBillWave, FaShoppingCart } from 'react-icons/fa'
import { IoShareSocialOutline } from 'react-icons/io5'
import fallbackimage from "/public/images/post/next.png";

function CoursePageTop({filteredCourse}) {
  return (
   <>
   <div className="flex justify-center  w-full  mt-10 ">
        <div
          id="rightside"
          className="flex flex-col bg-white p-5 pt-10 rounded-2xl border shadow-sm gap-10 w-3/5 mx-2"
        >
          <span className="flex justify-between items-center ">
            <h1 className="font-extrabold text-2xl">{filteredCourse.title}</h1>
            <IoShareSocialOutline  className='cursor-pointer '/>
          </span>
          <p>{filteredCourse.describe}</p>
          <span className="flex text-green-500 justify-between">
            <h1>{filteredCourse.teacherName}</h1>
            <h1 className="flex items-center gap-2">
              {filteredCourse.cost} <FaMoneyBillWave />
            </h1>
          </span>
          <button className=" bg-authOrangbutton w-1/2 text-center m-auto p-2 text-white flex gap-2 justify-center rounded-xl items-center ">
            شرکت در دوره <FaShoppingCart />
          </button>
        </div>
        <div id="leftside" className="w-3/5 mx-2">
          <img
            src={
              filteredCourse.tumbImageAddress
                ? filteredCourse.tumbImageAddress
                : fallbackimage
            }
            alt={filteredCourse.title}
            layout="responsive"
            width={280}
            height={200}
            className="rounded-2xl  content-center m-auto w-full"
          />
        </div>
      </div>
   </>
  )
}

export default CoursePageTop
import React from "react";
import fallbackimage from "/public/images/post/next.png";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router";

import { FaUser, FaLayerGroup } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import ReactStars from "react-rating-stars-component";
function CourseCart({
  course,
  courses,
  title,
  tumbImageAddress,
  describe,
  teacherName,
  cost,
  lastUpdate,
  courseId,
  userFavoriteId,
  userFavorite,
  isUserFavorite,
}) {
  const courseStars = {
    size: 20,
    value: course.courseRate,
    edit: false,
    count: 5,
    color: "orange",
    activeColor: "red",
  };
  return (
    <>
    <div className="border shadow-sm  rounded-2xl overflow-visible my-10 text-black bg-white">
    <Link
      to={`/courses/${course.courseId}`}
      className=""
    >
      <img
        src={course.tumbImageAddress ? course.tumbImageAddress : fallbackimage}
        alt={course.title}
        layout="responsive"
        width={280}
        height={200}
        className="rounded-2xl scale-x-90 content-center m-auto -translate-y-9"
      />
      <span className="flex justify-start mr-3 font-extrabold ">
        {course.title}
      </span>
      <br />
      <div className="flex justify-between">
        <span className="font-extralight flex p-2 items-center gap-2">
          {course.teacherName}
          <FaUser className="text-gray-500" />
        </span>
        <span className="font-extralight flex p-2 items-center gap-2">
          {course.currentRegistrants}
          <CgUserList />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-extralight flex p-2 items-center gap-2">
          {course.levelName}
          <FaLayerGroup className="text-gray-500" />
        </span>
        <span className="font-extralight flex p-2 items-center gap-2">
          <ReactStars {...courseStars} />
        </span>
      </div>
      <hr class="my-2 h-0.5 border-t-1 bg-black dark:bg-white/10" />
      <div className="flex justify-between items-center p-3 text-blue-400">
        <MdAddShoppingCart  className="text-3xl"/>
        <span className="flex gap-2 ">
          {course.cost}
          <p>تومان</p>
        </span>
      </div>
    </Link>
    </div>
    </>
  );
}

export default CourseCart;

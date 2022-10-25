import React from "react";
import CoursesDetailsCard from "../CoursesDetailsCard/CoursesDetailsCard";
import "./CoursesDetails.css";
const CoursesDetails = () => {
  return (
    <div className="md:flex">
      <div className="md:flex md:flex-col h-full p-3  md:w-[40%] lg:w-[50%] xl:w-[40%]  dark:bg-gray-900 dark:text-gray-100 rounded-r-lg pl-5 text-start">
        <CoursesDetailsCard />
        <CoursesDetailsCard />
        <CoursesDetailsCard />
        <CoursesDetailsCard />
        <CoursesDetailsCard />
      </div>
      <div className="text-center">
        <p className="text-center">ths is details</p>
      </div>
    </div>
  );
};

export default CoursesDetails;

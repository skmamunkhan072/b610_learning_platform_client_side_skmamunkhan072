import React from "react";
import CoursesDetailsCard from "../CoursesDetailsCard/CoursesDetailsCard";
import "./CoursesDetails.css";
import Img from "../../../img/shea_img/Homeimg.png";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";

const CoursesDetails = () => {
  const [categoryDetails, setCategoryDetails] = useState({});
  const lodCoursesDetails = useLoaderData();

  console.log(categoryDetails.categoryImage);

  return (
    <div className="md:flex">
      <div className="md:flex md:flex-col h-full p-3  md:w-[40%] lg:w-[50%] xl:w-[50%]  dark:bg-gray-900 dark:text-gray-100 rounded-br-lg pl-5 text-start">
        {lodCoursesDetails.map((category) => (
          <CoursesDetailsCard
            key={category.id}
            category={category}
            setCategoryDetails={setCategoryDetails}
          />
        ))}
      </div>
      <div className="mb-10 text-center md:w-[60%] lg:w-[50%] xl:w-[60%] ">
        <div className="ditails_wraper ">
          <img
            src={
              categoryDetails?.categoryImage
                ? categoryDetails?.categoryImage
                : Img
            }
            className="w-full mx-auto"
            alt=""
          />
          <div className="flex justify-end items-center my-5">
            <Link
              to={`/pricing/${categoryDetails?.categoryId}`}
              className="mr-6 lg:mb-0 flex justify-center align-center text-white bg-[#661fff] hover:bg-[#e11fff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-[#661fff] dark:hover:bg-[#e11fff] dark:focus:bg-[#e11fff] dark:focus:ring-blue-800"
            >
              <GiShoppingCart className="text-2xl mr-4" />
              By Now
            </Link>
          </div>
          <div className="mt-5 text-start px-5">
            <h2 className="text-3xl mb-2">
              {categoryDetails?.categoryName
                ? categoryDetails?.categoryName
                : "NO data found"}
            </h2>
            <p>
              {categoryDetails?.categoryDitails
                ? categoryDetails?.categoryDitails
                : "Nodata Found"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;

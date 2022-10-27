import React from "react";
import "./CoursesDetailsCard.css";
import { TbArrowNarrowRight } from "react-icons/tb";

const CoursesDetailsCard = ({ category, setCategoryDetails }) => {
  const {
    Number,
    categoryDitails,
    categoryId,
    categoryImage,
    categoryName,
    id,
  } = category;
  const handelCategoryDetails = () => {
    const categoryDetail = {
      categoryImage,
      categoryDitails,
      categoryName,
      categoryId,
    };
    setCategoryDetails(categoryDetail);
  };
  console.log(category);
  return (
    <div className="shadow-2xl rounded-md	 shadow-slate-500/50  mb-4 pr-4 sm:flex-row flex  md:flex-col lg:flex-row text-start dark:bg-gray-900 dark:text-gray-100">
      <div className="flex-shrink-0 mb-6 h-44  sm:mb-0">
        <img
          src="https://source.unsplash.com/100x100/?portrait?1"
          alt=""
          className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
        />
      </div>
      <div className="courses_card_details_text-wraper flex flex-col space-y-4 sm:ml-5  lg:ml-5  ">
        <div>
          <h2 className="text-2xl mt-2 font-semibold">{categoryName}</h2>
        </div>
        <div>
          <div className="w-12/12 flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              aria-label="Phonenumber"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
              ></path>
            </svg>
            <span className="dark:text-gray-400">
              {Number ? Number : "No data found"}
            </span>
          </div>
          <div className="text-start ">
            <button
              onClick={handelCategoryDetails}
              className=" mt-4 md:mb-4 lg:mb-0 flex justify-center align-center text-white bg-[#661fff] hover:bg-[#e11fff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#661fff] dark:hover:bg-[#e11fff] dark:focus:bg-[#e11fff] dark:focus:ring-blue-800"
            >
              Details
              <TbArrowNarrowRight className="mt-1 ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsCard;

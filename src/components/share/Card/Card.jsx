import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

const Card = ({ category }) => {
  // console.log(category);
  const { coursesName, discription, images, prices, coursesId, rating } =
    category;
  return (
    <div>
      <div className="card_wraper my-5 drop-shadow-2xl sm:w-8/12 mx-auto md:w-full h-[550px]">
        <div className="w-full mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-[100%]">
          <div className="course-price-badge">Paid</div>
          <div className="card_img_wraper">
            <Link to="#">
              <img
                className="rounded-lg card_img_thamnel w-[100%] h-[250px]"
                src={images}
                alt="product imag"
              />
            </Link>
          </div>
          <div className="px-5 pb-5">
            <Link to="#" className="text-start">
              <h1 className="text-xl text-start mt-5 font-semibold tracking-tight text-gray-900 dark:text-white">
                {coursesName}
              </h1>
              <div>
                <small>
                  {discription.lengtn > 250
                    ? discription.slice(0, 250) + "...."
                    : discription}
                </small>
              </div>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300 ml-2" />
              <FaStar className="text-yellow-300 ml-2" />
              <FaStar className="text-yellow-300 ml-2" />
              <BsStarHalf className="text-yellow-300 ml-2" />

              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {rating}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $ {prices}
              </span>
              <div>
                <Link
                  to={`/coursesdetails/${coursesId}`}
                  className="flex justify-center align-center text-white bg-slate-700	 hover:bg-gray-900 font-medium rounded-lg text-sm px-2 py-0.5 text-center"
                >
                  details
                  <TbArrowNarrowRight className="mt-1 ml-3" />
                </Link>
                <Link
                  to="/pricing"
                  className=" mt-5 flex justify-center align-center text-white bg-[#661fff] hover:bg-[#e11fff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#661fff] dark:hover:bg-[#e11fff] dark:focus:ring-blue-800"
                >
                  By Now
                  <TbArrowNarrowRight className="mt-1 ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import CardImg from "../../../img/shea_img/Homeimg.png";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="my-5 drop-shadow-2xl">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img className="rounded-lg" src={CardImg} alt="product imag" />
        </Link>
        <div className="px-5 pb-5">
          <Link to="#">
            <h5 className="text-xl text-start mt-5 font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </Link>
          <div className="flex items-center mt-2.5 mb-5">
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300 ml-2" />
            <FaStar className="text-yellow-300 ml-2" />
            <FaStar className="text-yellow-300 ml-2" />
            <BsStarHalf className="text-yellow-300 ml-2" />

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <Link
              to="/coursesdetails"
              className="flex justify-center align-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              details
              <TbArrowNarrowRight className="mt-1 ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

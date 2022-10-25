import React from "react";
import CoursesDetailsCard from "../CoursesDetailsCard/CoursesDetailsCard";
import "./CoursesDetails.css";
import Img from "../../../img/shea_img/Homeimg.png";
const CoursesDetails = () => {
  return (
    <div className="md:flex">
      <div className="md:flex md:flex-col h-full p-3  md:w-[40%] lg:w-[50%] xl:w-[50%]  dark:bg-gray-900 dark:text-gray-100 rounded-br-lg pl-5 text-start">
        <CoursesDetailsCard />
        <CoursesDetailsCard />
        <CoursesDetailsCard />
        <CoursesDetailsCard />
        <CoursesDetailsCard />
      </div>
      <div className="text-center md:w-[60%] lg:w-[50%] xl:w-[60%] ">
        <div className="ditails_wraper ">
          <img src={Img} className="w-full mx-auto" alt="" />
          <div className="mt-5 text-start px-5">
            <h2 className="text-3xl mb-2">Details Heading</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              iusto necessitatibus. Maxime in reprehenderit, molestiae cumque
              earum laudantium quod voluptate itaque perferendis enim modi
              reiciendis odio facere? Error, id vero?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;

import React from "react";
import Cart from "../../share/Cart/Cart";
import "./Courses.css";

const Courses = () => {
  return (
    <div>
      <h1 className="section_title relative text-3xl font-semibold	my-10">
        Featured Online Courses
      </h1>
      <div className="w-10/12 mx-auto my-20 grid gap-4  grid-cols-3">
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
};

export default Courses;

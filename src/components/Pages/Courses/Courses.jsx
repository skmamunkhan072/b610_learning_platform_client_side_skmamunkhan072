import React from "react";
import Card from "../../share/Card/Card";
import "./Courses.css";

const Courses = () => {
  return (
    <div>
      <h1 className="section_title relative text-3xl font-semibold	my-10">
        Featured Online Courses
      </h1>
      <div className="w-10/12 mx-auto my-20 grid gap-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 row-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Courses;

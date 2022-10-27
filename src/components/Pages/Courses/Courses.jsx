import React, { useContext } from "react";
import { LodDataContext } from "../../../Context/LodDataProvider";
import Card from "../../share/Card/Card";
import "./Courses.css";

const Courses = () => {
  const { coursesCategory } = useContext(LodDataContext);
  return (
    <div>
      <h1 className="section_title relative text-3xl font-semibold	my-10">
        Featured Online Courses
      </h1>
      <div className="w-10/12 mx-auto my-20 grid gap-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 row-auto">
        {coursesCategory.map((category) => (
          <Card key={category.coursesId} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

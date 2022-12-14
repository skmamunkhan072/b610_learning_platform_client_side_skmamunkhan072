import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LodDataContext = createContext();
const LodDataProvider = ({ children }) => {
  const [coursesCategory, setCoursesCategory] = useState([]);

  const handelCoursesCategory = () => {
    fetch("https://best-skills-learning-study-course-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCoursesCategory(data));
  };
  useEffect(() => {
    handelCoursesCategory();
  }, []);
  const LodDataInfo = { coursesCategory };
  return (
    <LodDataContext.Provider value={LodDataInfo}>
      {children}
    </LodDataContext.Provider>
  );
};

export default LodDataProvider;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../share/Footer/Footer";
import Header from "../share/Header/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;

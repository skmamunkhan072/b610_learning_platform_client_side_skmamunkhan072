import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Pricing from "../Pages/Pricing/Pricing";
import SingUp from "../Pages/SingUp/SingUp";
import Trainers from "../Pages/Trainers/Trainers";
import CoursesDetails from "../share/CoursesDetails/CoursesDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "coursesdetails",
        element: <CoursesDetails />,
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/SingUp",
        element: <SingUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

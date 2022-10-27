import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Pricing from "../Pages/Pricing/Pricing";
import SingUp from "../Pages/SingUp/SingUp";
import CoursesDetails from "../share/CoursesDetails/CoursesDetails";
import PrivetRoute from "../share/PrivetRoute/PrivetRoute";

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
        path: "coursesdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://best-skills-learning-study-course-server.vercel.app/coursesdetails/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <CoursesDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/pricing/:id",
        loader: ({ params }) =>
          fetch(
            `https://best-skills-learning-study-course-server.vercel.app/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <Pricing />
          </PrivetRoute>
        ),
      },
      {
        path: "/singUp",
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
      {
        path: "/blog/:id",
        element: <Blog />,
      },
    ],
  },
]);

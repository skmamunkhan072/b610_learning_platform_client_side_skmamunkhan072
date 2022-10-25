import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <div>error 404</div>,
    children: [
      {
        path: "/home",
        element: <div>home</div>,
      },
    ],
  },
]);

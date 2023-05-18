import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyToys from "../pages/MyToys";
import AllToys from "../pages/AllToys";
import AddToys from "../pages/AddToys";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/my-toys",
          element: <MyToys />,
        },
        {
          path: "/all-toys",
          element: <AllToys />,
        },
        {
          path: "/add-toys",
          element: <AddToys />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  
export default router;
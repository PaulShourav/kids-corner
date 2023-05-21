import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyToys from "../pages/MyToys";
import AllToys from "../pages/AllToys";
import AddToys from "../pages/AddToys";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails";

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
          element:<PrivateRoute><AddToys /></PrivateRoute> ,
        },
        {
          path: "/details/:id",
          element:<PrivateRoute><ToyDetails/></PrivateRoute> ,
          loader:({params})=>fetch(`http://localhost:5000/toy-details/${params.id}`)
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  
export default router;
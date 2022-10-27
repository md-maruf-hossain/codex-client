import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Error404 from "../Pages/Shared/Error404/Error404";
import ForgetPassword from "../Pages/Shared/ForgetPassword/ForgetPassword";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/categories/:id",
        element: <PrivateRoute><Categories></Categories></PrivateRoute>
        ,
        loader: ({ params }) => fetch(`https://codex-server.vercel.app/category/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
]);

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes/Recipes";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://assignment-10-server-onlyyasad.vercel.app/chefs')
        },
        {
            path: "about",
            element: <About></About>
        },
        {
            path: "chefs/:id",
            element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
            loader: ({params}) => fetch(`https://assignment-10-server-onlyyasad.vercel.app/chefs/${params.id}`)
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Registration></Registration>
        },
        {
            path: "blog",
            element: <Blog></Blog>
        },
        {
            path: "*",
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);

  export default router;
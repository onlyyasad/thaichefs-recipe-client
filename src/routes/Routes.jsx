import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes/Recipes";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";

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
            path: "chefs/:id",
            element: <Recipes></Recipes>,
            loader: ({params}) => fetch(`https://assignment-10-server-onlyyasad.vercel.app/chefs/${params.id}`)
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Registration></Registration>
        }
      ]
    },
  ]);

  export default router;
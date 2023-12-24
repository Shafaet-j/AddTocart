import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../AddToys/AddToys";
import ToyDetails from "../ToyDetails/ToyDetails";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://heroic-toy-hub-server-shafaet-j.vercel.app/allToys"),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://heroic-toy-hub-server-shafaet-j.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;

import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Error from "../pages/Shared/Error";
import Premeimum from "../pages/Shared/Premeimum";
import SeeDetails from "../pages/Shared/SeeDetails";
import PrivateRouter from "./PrivateRouter/PrivateRouter";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
        path: "/categories/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://assingment-ten-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/seeDetails/:id",
        element: <SeeDetails></SeeDetails>,
      },
      {
        path: "/premium/:id",
        element: (
          <PrivateRouter>
            <Premeimum></Premeimum>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Shared/Error";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    },
    {
        path: '*',
        element:<Error></Error>
    }
])
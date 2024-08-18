import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";
import Home from "../pages/home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ProfilePortal from "../pages/ProfilePortal";
import Logout from "../pages/Logout";

const router=createBrowserRouter([

    {
    path:'/',
    element: <Layout />,
    children:[
        {
            path:'/',
            element:<Home />,
        },
        {
            path:"profile",
            element:<ProfilePortal />
        }
    ]
    },
    {
        path:'signUp',
        element:<Signup />,
    },
    {
        path:"signin",
        element:<Signin />,
    },
    {
        path:"logout",
        element:<Logout />
    }
])

export default router;
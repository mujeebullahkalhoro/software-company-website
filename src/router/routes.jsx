import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import WhyChooseUs from "../pages/WhyChooseUs";

const router=createBrowserRouter([

    {
    path:'/',
    element: <Layout />,
    children:[
        {
            path:'/choose',
            element:<WhyChooseUs />
        }
    ]
    }


])

export default router;
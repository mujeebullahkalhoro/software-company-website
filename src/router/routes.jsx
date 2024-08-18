import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import WhyChooseUs from "../pages/WhyChooseUs";
import Services from "../pages/Services";
import Hiring from "../pages/Hiring";
const router=createBrowserRouter([

    {
    path:'/',
    element: <Layout />,
    children:[
        {
            path:'/choose',
            element:<WhyChooseUs />
        },
        {
            path:'/services',
            element:<Services/>
        }
        ,
        {
            path:'/vacancy',
            element:<Hiring/>
        }
    ]
    }


])

export default router;
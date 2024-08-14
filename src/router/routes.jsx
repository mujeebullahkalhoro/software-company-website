import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import WhyChooseUs from "../pages/WhyChooseUs";
import Services from "../pages/Services";
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
    ]
    }


])

export default router;
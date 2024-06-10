import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import Main from "../Layout/Main";
import SalesPage from "../Pages/SalesPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/sale',
                element: <SalesPage/>
            }
        ]
    }
])

export default router
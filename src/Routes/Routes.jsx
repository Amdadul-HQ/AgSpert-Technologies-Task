import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import Main from "../Layout/Main";
import SalesPage from "../Pages/SalesPage";
import LogingPage from "../Pages/LogingPage";
import SignUpPage from "../Pages/SignUpPage";
import PrivateRouts from "./PrivateRouts";

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
                element: <PrivateRouts><SalesPage/></PrivateRouts>
            },
            {
                path:'/login',
                element:<LogingPage/>
            },
            {
                path:'/signup',
                element:<SignUpPage/>
            }
        ]
    }
])

export default router
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>   
            <Toaster />
        </>
    );
};

export default Main;
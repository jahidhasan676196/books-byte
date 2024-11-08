import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div className="mx-32  mt-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
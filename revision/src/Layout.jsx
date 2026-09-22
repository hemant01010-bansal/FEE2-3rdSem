import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
        <Navbar/>
        <div>I am layout</div>
        <Outlet/>
        </>
    )
}

export default Layout;
import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function Layout(){
    const name="Hemant";
    const age=18;
    const theme="light";
    return (
        <>
        {/* we have to pass both name, age so we made a object inside value and put them both */}
        <UserContext.Provider value={{name, age, theme}}>
            <Navbar/>
        </UserContext.Provider>
        <div>I am layout</div>
        <Outlet/>
        </>
    )
}

export default Layout;
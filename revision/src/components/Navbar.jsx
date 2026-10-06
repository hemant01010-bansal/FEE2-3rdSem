import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useState } from "react";

function Navbar(){
    const data = useContext(UserContext);
    const [theme, setTheme]=useState(data.theme);
    console.log(data);
    function toggleTheme(){
        if (data.theme=="light"){
            data.theme="dark";
            setTheme("dark");
        }
        else{
            data.theme="light";
            setTheme("light");
        }
    }
    return (
        <>
        I am navbar
        <br></br>
        <p>My name is : {data.name}</p>
        <p>My age is : {data.age}</p>
        <p>Theme : {theme}</p>
        <p>Data Theme : {data.theme}</p>
        <button onClick={toggleTheme}>Change Theme</button>
            
        </>
    )
}

export default Navbar;
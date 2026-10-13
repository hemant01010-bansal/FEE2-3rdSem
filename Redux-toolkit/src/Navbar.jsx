import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { double } from "./redux/counterSlice";

function Navbar(){
    const a = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
    return (
        <>
        <h1>Navigation Bar</h1>
        <p>{a}</p>
        <button onClick={() => dispatch(double())}>Double</button>
        </>
    )
}

export default Navbar
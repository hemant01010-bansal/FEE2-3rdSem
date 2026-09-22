import React from "react";
import { useState } from "react";

function Counter(){
    const [count, setCount]=useState(0);

    return (
        <>
        I am counter
        <div>{count}</div>
        </>
    )
}

export default Counter;
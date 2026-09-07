import React from "react";
import { useState } from "react";

function GetName({name, setName}){

    return(
        <>
            <div>
                <input placeholder="name" value={name} onChange={(e) => {setName(e.target.value) 
                    console.log(e.target.value)}}/>
            </div>
        </>
    )
}

export default GetName;
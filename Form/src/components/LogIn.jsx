import React, { useState } from "react";

function LogIn(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function formValidator(){
        // if (name.length()<=3) 
    }

    return (
        <>
        <form>
            <p>
                Name
                <input 
                    placeholder="Name" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </p>

            <p>
                Email
                <input
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </p>

            <button>Submit</button>
            
        </form>
        </>
    )
}

export default LogIn
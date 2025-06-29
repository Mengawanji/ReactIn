import { useState, useEffect,useRef } from "react";

export default function RefComponents() {

    const ref = useRef(0);

    function handleClick () {
        ref.current++
        console.log(ref.current); 
    }

    return (  
        <div>
            <button onClick={handleClick}> 
                Click me!
            </button>
            <input type="text"/>
        </div>


    );
}
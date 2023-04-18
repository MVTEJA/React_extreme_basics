import React from "react";
import { useState } from "react";

const temp = () => {

    const[Item , setItem] = useState(""); 
    const[arr , setarr]  = useState([]);

    const itemEvent = (par) => {
         setItem(par.target.val)
    }

    const temp = () => {
        setarr([...arr , Item]);
    }
   
    return (
        <div>
           <input type="text" placeholder="Add a Items" onChange={itemEvent}/>
           <button onClick={temp}>Submit</button>
        </div>
    )
}
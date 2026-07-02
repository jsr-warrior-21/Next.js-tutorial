// "use client"
//     import { useState } from "react";
import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const Navbar=()=>{
    // const [search,setSearch] = useState("");
    console.log("navbar rendered.");
    return(
        <div> 
            <NavLinks/>
            <NavSearch/>
        </div>
    )
}
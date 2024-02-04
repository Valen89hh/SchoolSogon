"use client"

import getPaths from "@/data/PathsNav/Paths";
import TagNav from "./TagNav";
import { useState } from "react";


const OptionsTagNav = () => {

    const [stateNav, setStateNav] = useState(0)

    return ( <nav>
        <ul className="flex space-x-2 md:space-x-5 md:justify-start flex-wrap justify-center">
            {
                getPaths().map((path, i)=>(
                    <TagNav 
                        key={i}
                        tag={path.tag} 
                        navDirection={path.nav} 
                        selected={stateNav == path.id}
                        onClick={()=>{
                            setStateNav(path.id)
                        }}
                     />
                ))
            }
        </ul>
    </nav> );
}
 
export default OptionsTagNav;
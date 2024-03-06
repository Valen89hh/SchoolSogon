"use client"

import getPaths from "@/data/PathsNav/Paths";
import TagNav from "./TagNav";
import { useState } from "react";

interface OptionsTagNavProps{
    styles?: string
}


const OptionsTagNav: React.FC<OptionsTagNavProps> = ({
    styles = "space-x-2 md:space-x-5 flex-wrap justify-center"
}) => {

    const [stateNav, setStateNav] = useState(0)

    return ( <nav>
        <ul className={`flex ${styles}`}>
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
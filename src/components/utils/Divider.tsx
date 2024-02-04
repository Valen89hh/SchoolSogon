import React from "react";

interface DividerProps{
    style?: string
    height?: number
    color?: string
}

const Divider: React.FC<DividerProps> = ({
    style = "",
    height = 1,
    color = "bg-[#95A5A6]"
}) => {
    return ( 
        <div className={`w-full ${color}  ${style}`} style={{height: height}}></div>
     );
}
 
export default Divider;
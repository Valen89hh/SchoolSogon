import React from "react";

interface ContainerProps{
    children: React.ReactNode
    className?: string
}

const ContainerFlow: React.FC<ContainerProps> = ({
    className = "",
    children
}) => {
    return ( <section className={`px-7 m-auto ${className}`}>
        {children}
    </section> );
}
 
export default ContainerFlow;
import React from "react";

interface ContainerProps{
    children: React.ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({
    className = "",
    children
}) => {
    return ( <section className={`container m-auto px-3 ${className}`}>
        {children}
    </section> );
}
 
export default Container;
import React from "react";

interface ButtonPrimaryProps{
    onClick: () => void;
    children: React.ReactNode,
    className?: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    onClick,
    children,
    className
}) => {
    return ( <button onClick={onClick} className={`bg-primary w-fit 
    rounded-full
      text-white ${className}`}>
        {children}
    </button> );
}
 
export default ButtonPrimary;
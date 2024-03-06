import React from "react";

interface ButtonPrimaryProps{
    onClick: () => void;
    children: React.ReactNode
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    onClick,
    children
}) => {
    return ( <button onClick={onClick} className="bg-primary w-fit 
    rounded-full py-1
     px-4 text-white">
        {children}
    </button> );
}
 
export default ButtonPrimary;
import React from "react";

interface ButtonPrimaryProps{
    onClick: () => void;
    text: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    onClick,
    text
}) => {
    return ( <button onClick={onClick} className="bg-primary w-fit 
    rounded-full py-1
     px-4 text-white">
        {text}
    </button> );
}
 
export default ButtonPrimary;
import React from "react";

interface ContainerCenterProps {
    children: React.ReactNode
    className?: string
}

const ContainerCenter: React.FC<ContainerCenterProps> = ({
    className = "",
    children
}) => {
    return (<section className={`flex justify-center items-center ${className}`}>
        <div className="max-w-[65rem] ">

            {children}
        </div>
    </section>);
}

export default ContainerCenter;
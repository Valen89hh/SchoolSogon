interface ContainerDocumentationProps {
    title: string,
    children: React.ReactNode,
    className?: string
}

const ContainerDocumentation: React.FC<ContainerDocumentationProps> = ({
    title,
    children,
    className
}) => {
    return (<div className="rounded-lg">
        <div className="w-full bg-secondary rounded-t-lg  py-4">
            <h3 className="text-white font-bold text-center">{title}</h3>
        </div>
        <div className={`bg-white rounded-b-lg py-3 ${className} border-x-solid border-x-secondary-light 
    border-x-[1px]  border-b-solid border-b-secondary-light 
    border-b-[1px]`}>
            {children}
        </div>
    </div>);
}

export default ContainerDocumentation;
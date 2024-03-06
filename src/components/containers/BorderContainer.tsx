
interface BorderContainerProps{
    children: React.ReactNode,
    styles?: String
}

const BorderContainer: React.FC<BorderContainerProps> = ({
    children,
    styles = ""
}) => {
    return ( <div className={`border-solid border-secondary-light 
    border-[1px] p-4 rounded-md ${styles}`}>
        {children}
    </div> );
}
 
export default BorderContainer;
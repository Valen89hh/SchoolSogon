interface TitleProps {
    text: string
    color: string,
}

const Title: React.FC<TitleProps> = ({
    text,
    color = "text-white"
}) => {
    return (
        <h3 className={`text-[1.8rem] ${color} font-bold text-center uppercase`}>{text}</h3>
    );
}

export default Title;
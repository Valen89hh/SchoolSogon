interface TagAboutProps{
    tagName: string,
    selectedTag: boolean,
    onClick: ()=> void
}

const TagAbout: React.FC<TagAboutProps> = ({
    tagName,
    selectedTag,
    onClick
}) => {
    let border = (selectedTag) ? "border-b-primary border-b-2" : "border-b-secondary-light border-b-[1px]"
    let styleTag = (selectedTag) ? "text-primary font-semibold" : "text-secondary-light font-normal"

    return ( <div className={`text-center cursor-pointer border-solid ${border} p-2 w-1/4`} onClick={onClick}>
                <span className={styleTag}>{tagName}</span>
            </div> );
}
 
export default TagAbout;
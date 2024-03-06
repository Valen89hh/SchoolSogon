import { TagInfo } from "@/data/InfoProfile/InfoProfile";

interface InfoAboutProps{
    infoTag: TagInfo
}

const InfoAbout: React.FC<InfoAboutProps> = ({
    infoTag
}) => {
    return ( <div className="flex flex-col gap-2 py-2">
        <h3 className="font-bold text-[1.3rem] uppercase">{infoTag.title}</h3>
        <p className="text-[0.9rem] font-normal text-secondary-dark">{infoTag.text}</p>
    </div> );
}
 
export default InfoAbout;
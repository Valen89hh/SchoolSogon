"use client"

import BorderContainer from "@/components/widgets/containers/BorderContainer";
import TagAbout from "./TagAbout";
import { useState } from "react";
import InfoAbout from "./InfoAbout";
import { TagInfo } from "@/data/InfoProfile/InfoProfile";

interface AboutSchoolProps {
    tags: TagInfo[]
}

const AboutSchool: React.FC<AboutSchoolProps> = ({
    tags
}) => {

    const [selectedTag, setSelectedTag] = useState(tags[0].id)

    return (<BorderContainer styles="w-full sm:w-[60%]">
        <div className="flex w-full">
            {tags.map((v) => (
                <TagAbout key={v.id} selectedTag={v.id == selectedTag} tagName={v.tag} onClick={() => { setSelectedTag(v.id) }} />
            ))}
        </div>
        <InfoAbout infoTag={tags[selectedTag]} />
    </BorderContainer>);
}

export default AboutSchool;
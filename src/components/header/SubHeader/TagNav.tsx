import Link from "next/link";
import React from "react";

interface TagNavProps{
    tag: string,
    navDirection: string,
    selected: boolean,
    onClick: () => void
}

const TagNav: React.FC<TagNavProps> = ({
    tag,
    navDirection,
    selected,
    onClick
}) => {
    return ( 
    <li>
        <Link 
            onClick={onClick}
            href={navDirection}
            className={`
            text-[13px]  transition-all ease-in-out
            ${(selected) ? 'text-primary font-semibold' : 'text-secondary-light font-[400]'}`}>
         {tag}
        </Link>
    </li>
     );
}
 
export default TagNav;
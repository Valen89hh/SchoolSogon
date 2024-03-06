import Link from "next/link";
import React from "react";
import style from './TagNav.module.css'


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
            text-[13px]
            ${(selected) ? style.selected : style.unselected}`}>
         {tag}
        </Link>
    </li>
     );
}
 
export default TagNav;
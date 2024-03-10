import { useSideBarContext } from '@/context/SideBarContext';
import style from './Sidebar.module.css'
import React, { useRef } from 'react';
import OptionsTagNav from '../header/SubHeader/OptionsTagNav';

const SideBar = () => {

    const {stateSideBar, setStateSideBar} = useSideBarContext()

    const sideRef = useRef<HTMLDivElement>(null)

    const onClosed =(e: React.MouseEvent)=>{
        if(sideRef.current && sideRef.current == e.target){
            setStateSideBar(false)
        }
    }

    return ( <div ref={sideRef}
            className={`fixed z-10 inset-0 ${stateSideBar ? style["visible-side"] : style["hidden-side"]}
            bg-[#02020277] w-screen h-screen`}
        onClick={onClosed}>
        <div 
            className={`absolute top-0 
                        right-0 bg-white 
                        ${stateSideBar ? style["side-open"] : style["side-close"]} 
                     w-[250px] h-full`}
        >
            <OptionsTagNav styles='flex-col'/>
        </div>
    </div> );
}
 
export default SideBar;
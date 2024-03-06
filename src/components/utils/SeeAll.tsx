interface SeeAllProps{
    color?: string
}

const SeeAll: React.FC<SeeAllProps> = ({
    color = "text-white"
}) => {
    return ( <div className="w-full flex justify-end items-center">
        <span className={`${color} font-bold text-sm cursor-pointer`}>See All</span>
        <img src="/icons/RightSeeAll.svg" alt="icon" className="w-[0.8rem] h-[0.8rem] cursor-pointer" />
    </div> );
}
 
export default SeeAll;
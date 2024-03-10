interface SeeAllProps {
    color?: string
}

const SeeAll: React.FC<SeeAllProps> = ({
    color = "text-white"
}) => {
    return (<div className="w-full flex justify-end items-center">
        <span className={`${color} font-bold text-sm cursor-pointer`}>See All</span>
        <svg className="w-[0.85rem] " width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path className={`fill-current ${color}`} d="M9.00011 17.88V6.71004C8.99895 6.51141 9.05698 6.31695 9.16678 6.15143C9.27658 5.98591 9.43318 5.85684 9.61663 5.78067C9.80007 5.7045 10.002 5.68469 10.1968 5.72376C10.3915 5.76283 10.5702 5.85901 10.7101 6.00004L16.2901 11.59C16.4764 11.7774 16.5809 12.0309 16.5809 12.295C16.5809 12.5592 16.4764 12.8127 16.2901 13L10.7101 18.59C10.5702 18.7311 10.3915 18.8272 10.1968 18.8663C10.002 18.9054 9.80007 18.8856 9.61663 18.8094C9.43318 18.7332 9.27658 18.6042 9.16678 18.4387C9.05698 18.2731 8.99895 18.0787 9.00011 17.88Z" />
        </svg>
    </div>);
}

export default SeeAll;
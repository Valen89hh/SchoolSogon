import BorderContainer from "@/components/containers/BorderContainer";
import Image from "next/image";
import React from "react";

interface ProfileProps{
    img: String,
    description: String
}

const Profile: React.FC<ProfileProps> = ({
    img,
    description
}) => {
    return ( <BorderContainer styles="w-full sm:w-[40%]">
        <h2 className="font-bold text-2xl" >PROFILE</h2>
        <img src={`${img}`} alt="profile.png"  className="rounded-md my-3" />
        <p className="text-[0.9rem] font-normal text-secondary-dark">{description}</p>
    </BorderContainer> );
}
 
export default Profile;
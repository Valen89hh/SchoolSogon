"use client"

import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Container from "@/components/containers/Container";
import ContainerFlow from "@/components/containers/ContainerFlow";
import ConverImage from "@/components/pages/home/CoverImage/CoverImage";
import Major from "@/components/pages/home/Major/Major";
import ProfileContent from "@/components/pages/home/Profile/ProfileContent";
import Image from "next/image";

export default function Home() {
  return <>
    <Container className="flex 
    justify-center items-center
     sm:justify-between px-10 sm:px-0 
     flex-col sm:flex-row
     relative 
     w-full">
      
      <div className="flex flex-col mb-10 w-full sm:w-[300px] lg:w-[500px] xl:w-[600px]">

        <Image
          src="/Puntos2.svg"
          alt="Puntos"
          width={70}
          height={20}
          className="my-3 mx-5"
        />
        <h1 className="text-[2rem] lg:text-[2.5rem] font-bold text-black w-full my-[1rem]">
          Educational Innovation for 
          the Superior Generation, 
          Explore Pintar Plus
        </h1>
        <ButtonPrimary onClick={()=>{}}>
          <h3 className="text-[1.2rem]">Get Started</h3>
        </ButtonPrimary>
      </div>
      
      <ConverImage/>

      <Image
        src="/Puntos3.svg"
        alt="Puntos"
        width={70}
        height={20}
        className="absolute hidden inside-0 top-0"
      />
      <Image
          src="/Puntos3.svg"
          alt="Puntos"
          width={70}
          height={20}
          className="absolute sm:hidden block left-5 bottom-0"
        />
      
    </Container>
    <ProfileContent/>
    <Major/>
  </>;
}

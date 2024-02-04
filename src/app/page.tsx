"use client"

import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Container from "@/components/containers/Container";
import ContainerFlow from "@/components/containers/ContainerFlow";
import ConverImage from "@/components/pages/home/CoverImage/CoverImage";
import Image from "next/image";

export default function Home() {
  return <>
    <Container className="flex my-0 xs:my-10
    justify-center items-center
     sm:justify-evenly px-10 
     flex-col sm:flex-row
     space-x-4 relative 
     w-full">
      
      <div className="flex flex-col mb-10 w-full sm:w-[300px] lg:w-[400px] xl:w-[500px]">

        <Image
          src="/Puntos2.svg"
          alt="Puntos"
          width={70}
          height={20}
          className="my-3 mx-5"
        />
        <h1 className="text-[1.5rem] md:text-[2rem] font-bold text-black w-full">
          Educational Innovation for 
          the Superior Generation, 
          Explore Pintar Plus
        </h1>
        <ButtonPrimary onClick={()=>{}} text="Get Started"/>
      </div>
      
      <ConverImage/>

      <Image
        src="/Puntos3.svg"
        alt="Puntos"
        width={70}
        height={20}
        className="absolute hidden sm:block inside-0 bottom-0"
      />
      <Image
          src="/Puntos3.svg"
          alt="Puntos"
          width={70}
          height={20}
          className="absolute sm:hidden block left-5 bottom-0"
        />
      
    </Container>
  </>;
}

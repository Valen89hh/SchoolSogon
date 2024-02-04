import Image from "next/image";



const ConverImage = () => {
    return ( 
        <div className="relative w-fit">
            <img src="/student.svg" alt="" />
            <div className="flex items-center
            flex-col px-2 py-1 rounded-md
             bg-secondary w-[4rem]
             absolute top-6 left-2">
                <span className="text-white text-lg font-bold h-5">1000</span>
                <span className="text-[9px] text-white">Students</span>
            </div>
            <div className="flex items-center
            flex-col px-4 py-1 rounded-md
             bg-[#6F6FD3] w-[4rem]
             absolute bottom-[7rem] right-[-2rem]">
                <span className="text-white text-lg font-bold h-5">20</span>
                <span className="text-[9px] text-white">Majors</span>
            </div>
            <div className="flex items-center
            flex-col px-2 py-1 rounded-md
             bg-[#FF4B55] w-[4rem]
             absolute bottom-[7rem] left-[-2rem]">
                <span className="text-white text-lg font-bold h-5">500</span>
                <span className="text-[9px] text-white">Teachers</span>
            </div>
            <Image
        src="/Puntos1.svg"
        alt="Puntos"
        width={70}
        height={20}
        className="absolute top-0 right-5"
      />
        </div>
        
     );
}
 
export default ConverImage;
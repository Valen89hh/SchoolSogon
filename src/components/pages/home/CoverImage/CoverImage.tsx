import Image from "next/image";



const ConverImage = () => {
    return ( 
        <div className="grid-element bg-primary">
            <Image 
            src="/drawable/Cover.png"
             alt="" 
             width={500}
             height={500} />
           
        </div>
        
     );
}
 
export default ConverImage;
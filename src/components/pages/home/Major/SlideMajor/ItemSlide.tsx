interface ItemSlideProps{
    src: string,
    text: string
}

const ItemSlide: React.FC<ItemSlideProps> = ({
    src,
    text
}) => {
    return (<div className="h-[300px] rounded-lg overflow-hidden" style={{backgroundImage:`url(${src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="relative w-full h-full" style={{background: "linear-gradient(0deg, rgba(0,0,0,0.9232505643340858) 10%, rgba(9,9,121,0) 40%)"}}>

            <span className="absolute bottom-0 py-2 px-1 text-center text-white w-full">{text}</span>
        </div>
    </div> );
}
 
export default ItemSlide;
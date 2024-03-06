import ItemSlide from "./ItemSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllDestacado } from "@/data/Destacado/DestacadoInfo";

const SlideMajor = () => {

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

    return ( <div className="w-full">
        <div className="mt-2">
            <div className="slider-container">
                <Slider {...settings}>
                    {getAllDestacado().map((destacado, i)=>(

                        <ItemSlide key={i} src={destacado.img} text={destacado.text}/>
                    ))}

                </Slider>
            </div>
        </div>
    </div> );
}
 
export default SlideMajor;
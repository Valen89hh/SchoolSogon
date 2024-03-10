import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "@/components/widgets/buttons/ButtonsSlider";

interface ArrowSettings {
    width: string,
    height: string,
    translate: string
}

interface SliderContainerProps {
    children: React.ReactNode,
    configs?: Record<string, any>,
    arrowSettings?: ArrowSettings
}

const SliderContainer: React.FC<SliderContainerProps> = ({
    children,
    configs = {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    },
    arrowSettings = {
        width: "1.8rem",
        height: "1.8rem",
        translate: "-0.35rem"
    }
}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        ...configs,
        nextArrow: <SampleNextArrow width={arrowSettings.width} height={arrowSettings.height} translate={arrowSettings.translate} />,
        prevArrow: <SamplePrevArrow width={arrowSettings.width} height={arrowSettings.height} translate={arrowSettings.translate} />,
    };

    return (<div className="slider-container">
        <Slider {...settings}>
            {children}
        </Slider>
    </div>);
}

export default SliderContainer;
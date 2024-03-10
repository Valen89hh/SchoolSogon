"use client"

import ItemSlide from "./ItemSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllDestacado } from "@/data/Destacado/DestacadoInfo";
import { useEffect, useState } from "react";
import { SampleNextArrow, SamplePrevArrow } from "@/components/widgets/buttons/ButtonsSlider";











const SlideMajor = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow width="1.8rem" height="1.8rem" translate="-0.35rem" />,
    prevArrow: <SamplePrevArrow width="1.8rem" height="1.8rem" translate="-0.35rem" />
  };

  return (<div className="w-full">
    <div className="mt-2">
      <div className="slider-container">
        <Slider {...settings}>
          {getAllDestacado().map((destacado, i) => (

            <ItemSlide key={i} src={destacado.img} text={destacado.text} />
          ))}

        </Slider>
      </div>
    </div>
  </div>);
}

export default SlideMajor;
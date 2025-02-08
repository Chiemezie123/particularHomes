"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./styles.module.css";
import { ArrowLeft, ArrowRight, CloseXIcon, CompressIcon} from "@/assets/svg";
import  houseOne from '@/assets/images/houseImageOne.png'
import  houseTwo from "@/assets/images/houseImageTwo.png"
import  houseThree from '@/assets/images/houseImageThree.png'
import { SlickProps } from "./index.types";

const items = [
  {
    image: houseOne,
  },
  {
    image: houseThree,
  },
  {
    image: houseTwo,
  },
  {
    image: houseThree,
  },
];

// Custom arrow components to match the existing design
const CustomPrevArrow = (props:any) => {
  const { onClick } = props;
  return (
    <button
      className="h-[48px] w-[48px] absolute -bottom-[80px] bg-[rgba(0,0,0,0.50)] left-[calc(50%-_80px)]  md:translate-x-[unset] rounded-full flex items-center justify-center md:absolute md:z-10 md:left-[40px] md:top-1/2 md:transform md:-translate-y-1/2 md:ml-[-36px] mr-8 md:mr-0"
      onClick={onClick}
    >
      <ArrowLeft/>
    </button>
  );
};

const CustomNextArrow = (props:any) => {
  const { onClick } = props;
  return (
    <button
      className="h-[48px] w-[48px]  absolute -bottom-[80px] right-[calc(50%-_80px)]  bg-[rgba(0,0,0,0.50)]  md:translate-x-[unset] rounded-full flex items-center justify-center md:absolute md:z-10 md:right-[40px] md:top-1/2 md:transform md:-translate-y-1/2 md:mr-[-36px]"
      onClick={onClick}
    >
      <ArrowRight/>
    </button>
  );
};

export const CustomSlider = (props:SlickProps) => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow/>,
    prevArrow: <CustomPrevArrow/>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${styles.container} relative ${props.closeDetailComp ? "w-full" : "w-[580px]"} `}>
      <div
              className="absolute z-10 cursor-pointer pt-[10px] pr-[16px]"
              onClick={props.setModalOpen}
            >
              <CloseXIcon />
            </div>
            <div
              className={`absolute z-10 cursor-pointer right-0 pt-[10px] pr-[16px] ${
                props.closeDetailComp ? "" : "hidden"
              }`}
              onClick={props.setCloseDetailComp}
            >
              <CompressIcon />
            </div>
          <Slider {...settings}>
          {items.map((items,index) => (
                  <div key={index} className={`relative ${props.closeDetailComp ? "w-full" : "w-[580px]"} h-[656px]`}>
                    <Image className="absolute"  src={items.image} alt="background-image" fill />
                  </div>
        ))}
      </Slider>
    </div>
  );
};


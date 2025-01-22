import React from "react";
import { imageCompProps } from "./index.types";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CloseXIcon, CompressIcon } from "@/assets/svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ImageComp(props: imageCompProps) {
  const { imageArray } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div
      className={`relative flex ${
        props.closeDetailComp ? "w-full" : "w-[580px]"
      } h-[656px] p-4 flex-col justify-between items-start shrink-0`}
    >
      <div
        className="absolute z-10 cursor-pointer"
        onClick={props.setModalOpen}
      >
        <CloseXIcon />
      </div>
      <div
        className={`absolute z-10 cursor-pointer right-0 pr-[16px] ${
          props.closeDetailComp ? "" : "hidden"
        }`}
        onClick={props.setCloseDetailComp}
      >
        <CompressIcon />
      </div>
      {/* <Slider {...settings}>
        {imageArray.map((items) => (
          <div className="absolute inset-0 rounded-[12px] overflow-hidden">
            <Image src={items.image} alt="background-image" fill />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 33.2%, rgba(0, 0, 0, 0.65) 73.83%)",
              }}
            />
          </div>
        ))}
      </Slider> */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 z-10">
        <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#465039] ">
          <ArrowLeft />
        </div>
        <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#465039] ">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

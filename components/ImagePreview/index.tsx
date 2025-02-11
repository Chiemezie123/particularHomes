"use client";
import React, { useState } from "react";
import { Typography } from "../typography";
import { YingYang } from "@/assets/svg";
import ActionCard from "./actionCard";
import Image, { StaticImageData } from "next/image";
import ActionButton from "./actionButton";
import { nanoid } from "nanoid";

export default function ImagePreview() {
  const [isIncreaseNumber, setIsIncreaseNumber] = useState([
    { id: nanoid(), name: "image2" },
  ]);
  const [isPreviewImage, setIsPreviewImage] = useState<
    string | StaticImageData | null
  >(null);
  const handleIncrease = () => {
    const newObJ = {
      id: nanoid(),
      name: `image${nanoid()}`,
    };
    setIsIncreaseNumber((props) => [...props, newObJ]);
  };

  console.log(isIncreaseNumber, "lets see");

  const EmptyState = () => {
    return (
      <div className="flex flex-col gap-[12px] items-center">
        <div className="w-[48px] h-[48px] bg-[#f6f6f6] rounded-full flex items-center justify-center">
          <YingYang />
        </div>
        <div>
          <Typography
            variant="c-m"
            color="tabUnderlineColor"
            font="Inter"
            fontWeight="regular"
            className="italic"
          >
            Image preview will appear here
          </Typography>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex flex-col justify-center items-center gap-3 h-[400px] self-stretch rounded-lg border border-[#DFDFDF] bg-white cursor-pointer">
        {isPreviewImage && isPreviewImage ? (
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              className="absolute"
              src={isPreviewImage}
              alt="Uploaded image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
      <div className="flex items-center gap-[1rem]">
        <div className="w-full flex flex-wrap gap-3 items-center border">
          {isIncreaseNumber &&
            isIncreaseNumber.map((item) => (
              <ActionCard ide={item.id} name={item.name}    onChange={(imageUrl) => setIsPreviewImage(imageUrl)}/>
            ))}
        </div>
        <div>
          <ActionButton onClick={handleIncrease} />
        </div>
      </div>
    </div>
  );
}

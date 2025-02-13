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
  const [cardImages, setCardImages] = useState<Record<string, string | StaticImageData>>({});
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleIncrease = () => {
    const newObJ = {
      id: nanoid(),
      name: `image${nanoid()}`,
    };
    setIsIncreaseNumber((props) => [...props, newObJ]);
  };

  const handleDecrease = (id: string) => {
    // Filter out the object with the matching id
    const updatedArray = isIncreaseNumber.filter((item) => item.id !== id);
    setIsIncreaseNumber(updatedArray);

    // Remove the image for the deleted card
    setCardImages((prev) => {
      const updatedCardImages = { ...prev };
      delete updatedCardImages[id];

      // Update selectedCardId after cardImages is updated
      if (selectedCardId === id) {
        if (updatedArray.length > 0) {
          // Find the previous card's ID
          const previousCardId = updatedArray[updatedArray.length - 1].id;
          setSelectedCardId(previousCardId);
        } else {
          // If no cards are left, set selectedCardId to null
          setSelectedCardId(null);
        }
      }

      return updatedCardImages;
    });
  };

  const handleImageChange = (id: string, imageUrl: string | StaticImageData) => {
    setCardImages((prev) => ({ ...prev, [id]: imageUrl }));
    setSelectedCardId(id); // Set the selected card to the one with the new image
  };

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
        {selectedCardId && cardImages[selectedCardId] ? (
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              className="absolute"
              src={cardImages[selectedCardId]}
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
        <div className="flex flex-wrap gap-3 items-center">
          {isIncreaseNumber.map((item) => (
            <ActionCard
              key={item.id}
              ide={item.id}
              name={item.name}
              getId={handleDecrease}
              onChange={(imageUrl) => handleImageChange(item.id, imageUrl)}
              setImagePic={(id)=>setSelectedCardId(id)}
            />
          ))}
        </div>
        <div>
          <ActionButton onClick={handleIncrease} />
        </div>
      </div>
    </div>
  );
}
import React, { ChangeEvent, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUp, Cancel } from "@/assets/svg";

interface ActionCardProps {
  ide?: string;
  name?: string;
  onChange: (imageUrl: string | StaticImageData) => void; // Add onChange prop
  getId :(id:string)=> void
}

export default function ActionCard({ ide ,onChange,getId}: ActionCardProps) {
  const [isImage, setImage] = useState<string | StaticImageData | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onChange(imageUrl)
    }
  };

  const handleClick = () => {
    if (inputRef.current && !isImage) {
      inputRef.current.click();
      console.log("Input element clicked");
    }
  };

  
  const handleCancel = () => {
    setImage(null); 
    if (ide) {
      getId(ide); 
    }
  };

  return (
    <div className="flex w-[172px] h-[119px] p-1 justify-center items-center gap-1 rounded-lg border border-[#DFDFDF] bg-white">
      {isImage ? (
        <div className="relative w-full h-full rounded-[12px] overflow-hidden cursor-pointer">
          <Image className="absolute" src={isImage} alt="Uploaded image" layout="fill" objectFit="cover" />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 33.2%, rgba(0, 0, 0, 0.65) 73.83%)",
            }}
          />
          <button
            className="absolute top-2 right-2 bg-white rounded-full p-1"
            onClick={handleCancel}
          >
            <Cancel />
          </button>
        </div>
      ) : (
        <div
          className="w-[48px] h-[48px] bg-[#f6f6f6] rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <input
            type="file"
            id={ide}
            className="input-field"
            accept="image/*"
            hidden
            onChange={handleImageChange}
            ref={inputRef}
          />
          <ArrowUp />
        </div>
      )}
    </div>
  );
}
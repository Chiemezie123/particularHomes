import React, { useState } from "react";
import DetailsComp from "./detailsComp";
import houseImageOne from "@/assets/images/houseImageOne.png";
import houseImageTwo from "@/assets/images/houseImageTwo.png";
import houseImageThree from "@/assets/images/houseImageThree.png";
import { innerImageProps } from "./index.types";
import { CustomSlider } from "../slick";

export default function InnerModal(props: innerImageProps) {
  const featuresArray = [
    {
      features: "Spacious Rooms",
    },
    {
      features: "Spacious Rooms",
    },
    {
      features: "Spacious Rooms",
    },
    {
      features: "Spacious Rooms",
    },
  ];

  const imageArray = [
    { image: houseImageOne },
    { image: houseImageTwo },
    { image: houseImageThree },
  ];

  const [closeDetailsComp, setCloseDetailsComp] = useState<boolean>(false);

  const toggleLeftModal = () => {
    setCloseDetailsComp((props) => !props);
  };

  return (
    <div className={`flex w-[912px] h-[656px] items-start shrink-0`}>
      <div className="w-full">
       
        <CustomSlider
         setModalOpen={props.setModalOpen}
        closeDetailComp={closeDetailsComp}
        setCloseDetailComp={toggleLeftModal}
          />
      </div>
      <div>
        <DetailsComp
          title={"Sunny Three-Bedroom Flat with Balcony"}
          location={"Lagos, Nigeria"}
          price={24}
          featureArray={featuresArray}
          MainLocation="Located in the heart of Lagos, Nigeria. Serene environment, high profile neighbors, 24/7 power supply with security."
          closeDetailComp={closeDetailsComp}
          setCloseDetailComp={toggleLeftModal}
        />
      </div>
    </div>
  );
}

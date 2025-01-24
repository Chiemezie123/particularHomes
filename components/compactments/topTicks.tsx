import React, { useState } from "react";
import { listingCardData } from "@/constants/data";
import ListingCards from "../listingCards";
import { Modal } from "../modal";
import InnerModal from "../modal/innerModal";

export default function TopTicks() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCLick = ():any => {
    setOpenModal((prop) => !prop);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {listingCardData.map((card,index) => (
          <ListingCards
            key={index} // Ensure each card has a unique key
            location={card.location}
            title={card.title}
            backgroundImage={card.backgroundImage}
            rating={card.rating}
            onClick={handleCLick}
            isApartment={false}
          />
        ))}
      </div>
      {openModal && (
        <Modal
          isOpen={openModal}
          closeModal={handleCLick}
          mobileLayoutType="full"
          children={<InnerModal setModalOpen={handleCLick}/>}
        />
      )}
    </>
  );
}

'use client'
import React,{useState} from 'react'
import ListingCards from '@/components/listingCards'
import { listingCardData } from '@/constants/data'

export default function ApartmentBody () {
     const [openModal, setOpenModal] = useState<boolean>(false);
    
      const handleCLick = ():any => {
        setOpenModal((prop) => !prop);
      };
    
  return (
    <div className='p-[16px] bg-[#fff] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
        {listingCardData.map((card,index) => (
            <ListingCards
            key={index} // Ensure each card has a unique key
            location={card.location}
            title={card.title}
            backgroundImage={card.backgroundImage}
            rating={card.rating}
            onClick={handleCLick}
            isApartment={true}
            />
        ))}
    </div>
  )
}

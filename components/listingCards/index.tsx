import React from 'react';
import { Typography } from '../typography';
import { Location , Rating } from '@/assets/svg';
import { listingCardProps } from './index.types';
import Image from 'next/image';
import { Bin, Pencil } from '@/assets/svg';
export default function ListingCards(props: listingCardProps) {

  const {title, rating, location, backgroundImage, onClick, isApartment} = props;

  return (
    <div className=' relative flex h-64 p-4 px-3 flex-col justify-end items-start gap-1 flex-[1_0_0] rounded-[12px] cursor-pointer' onClick={onClick}>
      {isApartment && (
        <div className='absolute z-10 top-0 right-0 pr-[10px] pt-[10px] flex justify-end items-center gap-2 self-stretch'>
        <div className='flex w-12 h-12 p-3 justify-center items-center rounded-lg bg-[rgba(0,0,0,0.5)]'>
          <Pencil/>
        </div>
        <div className='flex w-12 h-12 p-3 justify-center items-center rounded-lg bg-[rgba(0,0,0,0.5)]'>
          <Bin/>
        </div>
      </div>
      )}
    <div className="absolute inset-0 rounded-[12px] overflow-hidden">
        <Image className="absolute" src={backgroundImage} alt="" fill />
        <div
          className="absolute inset-0"
          style={{
            background:'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 33.2%, rgba(0, 0, 0, 0.65) 73.83%)',
          }}
        />
      </div>
        <div className='relative flex flex-col items-start gap-2 self-stretch z-1'>
            <div>
              <Typography customClassName='text-white font-inter text-base font-medium leading-normal'>
                {title}
              </Typography>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                  <Location/>
                  <Typography customClassName='text-white font-inter text-sm font-normal leading-none'>
                  {location}
                  </Typography>
                </div>
                <div className='flex items-center gap-1'>
                  <Rating/>
                  <Typography customClassName='text-white font-inter text-sm font-normal leading-none'>
                  {rating}
                  </Typography>
                </div>
            </div>
        </div>
    </div>
  )
}

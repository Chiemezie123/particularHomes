import React from 'react';
import { Typography } from '../typography';
import { Location , Rating } from '@/assets/svg';
import { listingCardProps } from './index.types';
import Image from 'next/image';

export default function ListingCards(props: listingCardProps) {

  const {title, rating, location, backgroundImage, onClick} = props;

  return (
    <div className=' relative flex h-64 p-4 px-3 flex-col justify-end items-start gap-1 flex-[1_0_0] rounded-[12px] cursor-pointer' onClick={onClick}>
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

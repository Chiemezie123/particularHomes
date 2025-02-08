import React from 'react';
import { Caution } from '@/assets/svg';
import { Typography } from '../typography';

export default function ImageNotification() {
  return (
    <div className='flex p-4 items-center gap-3 self-stretch rounded-[8px] bg-[#DEFAF7]'>
        <div>
            <Caution/>
        </div>
        <div>
            <Typography variant="c-m" color="black">
            Supports JPG, PNG, and JPEG. Images uploaded should be of reasonable fidelity and must not exceed 5MB 
            </Typography>
        </div>
    </div>
  )
}

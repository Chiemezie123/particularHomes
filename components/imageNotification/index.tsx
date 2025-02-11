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
            <Typography variant="c-m" color="green2" fontWeight="regular" font="poppins">
            Supports <strong>JPG</strong>, <strong>PNG</strong>, and <strong>JPEG</strong>. Images uploaded should be of reasonable fidelity and must not exceed <strong>5MB</strong>
            </Typography>
        </div>
    </div>
  )
}

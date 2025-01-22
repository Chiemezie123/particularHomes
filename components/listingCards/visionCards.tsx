import React from 'react'
import { Typography } from '../typography'
import Image from 'next/image';
import { visionCardProps } from './index.types';

export default function VisionCards(props:visionCardProps) {
    const {title, logo, text} = props
  return (
    <div className='w-[391px] border-l-2 border-solid  flex flex-col items-center pl-[20px]'>
        <div>
            {logo}
        </div>
        <div>
            <Typography fontWeight='bold'color="green1" font="montserrat" customClassName='  text-[36px]  leading-[64px] tracking-[0.346px]'>
                {title}
            </Typography>
        </div>
        <div>
            <Typography fontWeight="medium" color="green1" font="montserrat" customClassName='text-[18px]  leading-[28px] tracking-[0.09px]'>
                {text}
            </Typography>
        </div>
    </div>
  )
}


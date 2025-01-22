import React from 'react'
import { RatingCompProps } from './index.types'
import { Typography } from '../typography'
import { Ascending } from '@/assets/svg'
import { Descending } from '@/assets/svg'
import { cn } from '@/utils/helper'

export default function RatingComp(props:RatingCompProps) {

    const {title,number,rating,isIncrease } = props
  return (
    <div className='flex h-[200px] p-3 flex-col justify-between items-start flex-[1_0_0] rounded-[16px] bg-[var(--White,#FFF)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)]'>
        <div>
            <Typography color="dashboardGrey2" font="Inter" fontWeight="regular"  customClassName='text-[] font-inter text-[16px] font-normal leading-normal'>
            {title}
            </Typography>
        </div>
        <div>
            <Typography color="dashboardGreen" font="poppins" fontWeight="semibold" customClassName='  text-[44px] leading-normal'>
            {number}
            </Typography>
        </div>
        <div className={cn(`flex p-2 items-center gap-2  ${isIncrease ? "rounded-[8px] bg-[#00BE00]": "rounded-[8px] bg-[#E50000]"}`)}>
            <div>
            {isIncrease ? <Ascending/> : <Descending/>}
            </div>
            <div>
                <Typography color="white" fontWeight="medium" font="Inter"  customClassName=' text-[16px]  leading-normal'>
                {rating}
                </Typography>
            </div>
        </div>
    </div>
  )
}

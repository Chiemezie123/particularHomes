'use client'

import React from 'react'
import { Button } from '../button'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '../typography'
import { landingNavBarProps } from './index.types';

export default function LandingNavBar(props:landingNavBarProps) {
    const {pathOne,
         pathThree,
          pathTwo,
           buttonText, 
           onClick,
            logo,
             logoWidth,
             pathOneText,
             pathTwoText,
             pathThreeText,
              logoHeight
            } = props
  return (
    <div className='flex max-w-[1278px] items-center gap-[410px]'>
        <div>
            <Image src={logo} alt='logo' width={logoWidth} height={logoHeight}/>
        </div>
        <div className='flex items-center gap-[48px]'>
            <div>
                <Link href={pathOne}>
                <Typography customClassName='text-[#F6F6F6] font-montserrat text-[18px] font-medium leading-[28px] tracking-[0.09px]'>
                    {pathOneText}
                </Typography>
                </Link>
            </div>
            <div>
            <Link href={pathTwo}>
                <Typography customClassName='text-[#F6F6F6] font-montserrat text-[18px] font-medium leading-[28px] tracking-[0.09px]'>
                    {pathTwoText}
                </Typography>
                </Link>
            </div>
            <div>
            <Link href={pathThree}>
                <Typography customClassName='text-[#F6F6F6] font-montserrat text-[18px] font-medium leading-[28px] tracking-[0.09px]'>
                    {pathThreeText}
                </Typography>
                </Link>
            </div>
            <div>
                <Button children={buttonText} onClick={onClick} className='rounded-[50px] border border-[#F6F6F6] bg-[#008273] text-white'/>
            </div>
        </div>
    </div>
  )
}

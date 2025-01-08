"use client"
import React from 'react'
import NotificationGreenIcon from "@/assets/svg/notificationGreenIcon.svg";
import QuoteGreenIcon from "@/assets/svg/quoteGreenIcon.svg"
import placeHolderImage from '@/assets/images/manInBlack.png'
import Image from 'next/image';
import { Typography } from '../typography';
import { DropDown } from '@/assets/svg';
import NavBarHomeIcon from '@/assets/svg/navBarHomeIcon.svg'
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className='flex justify-between items-center self-stretch px-6 py-4 border-b border-[#D3DBDA] bg-[#FBFFFF]'>
        <div className='flex items-end gap-2'>
          <div>
            <NavBarHomeIcon/>
          </div>
          <div>
            <Typography>
            {pathname.split('/').pop()}
            </Typography>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center justify-center w-12 h-12 p-3 rounded-lg bg-[#E5F2F2]'>
          <QuoteGreenIcon/>
          </div>
          <div className='flex items-center justify-center w-12 h-12 p-3 rounded-lg bg-[#E5F2F2]'>
          <NotificationGreenIcon/>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <Image src={placeHolderImage} alt={"placeHolder"} width={48} height={48}/>
            </div>
            <div className='flex items-center'>
              <Typography>Jake Blake</Typography>
              <DropDown/>
            </div>
          </div>
        </div>
    </div>
  )
}

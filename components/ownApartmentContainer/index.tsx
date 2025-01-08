'use client'
import React from 'react'
import { Typography } from '../typography'
import Image from 'next/image'
import ManTalkingWithWoman from '@/assets/svg/manTalkingWithWoman.svg'
import { Button, SecondButton } from '../button'
export default function OwnApartmentContainer() {
  return (
    <div className='flex flex-col items-center pt-4 pr-4 pb-6 pl-4 gap-4 flex-1 self-stretch rounded-[16px] border border-[var(--Paircular-Variant-2,#008273)] bg-[var(--White,#FFF)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)]'>
        <div>
            <Typography customClassName='max-w-[324px] text-[var(--Paircular-Variant,#003D36)] text-center font-poppins text-[24px] font-semibold leading-normal'>
            Own an apartment you’d like to rent out?
            </Typography>
        </div>
        <div>
            {/* <Image src={ManTalkingWithWoman} alt='MantalkingWithWoman' width={240} height={240}/> */}
            <ManTalkingWithWoman/>
        </div>
        <div>
            {/* <Button /> */}
            <SecondButton children={'Upload Apartment'} customClassName='flex p-[16px_32px] justify-center items-center gap-1 rounded-[8px] bg-[var(--Paircular-Variant,#003D36)] text-white' />
        </div>
    </div>
  )
}

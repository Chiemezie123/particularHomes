import { Button } from '@/components/button'
import { Typography } from '@/components/typography'
import React from 'react'

export default function FourthSection() {
  return (
        <section className='bg-[#F6F6F6]'>
             <section className='mx-auto max-w-[1440px]  py-[100px] bg-[#F6F6F6] flex flex-col items-center  gap-4'>
            <div className='flex items-center justify-center w-full'>
                <Typography fontWeight='bold' color="green1" font="montserrat"  customClassName=' text-[56px] leading-[64px] tracking-[0.538px]'>
                Ready to transform your home experience?
                </Typography>
            </div>
            <div>
                <Typography fontWeight='medium' color="green1" font="montserrat" customClassName=' text-[18px]  leading-[28px] tracking-[0.09px]'>
                Stay in  the loop with Paircular Holmes! Be the first to  receive the latest updates, exclusive offers, and special promotions.
                </Typography>
            </div>
            <div>
                <Button children="Join our Community" className='flex w-[328px] h-[56px] p-[10px_16px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[50px] bg-[#008273] text-[#F6F6F6]'/>
            </div>
        </section>
        </section>
  )
}

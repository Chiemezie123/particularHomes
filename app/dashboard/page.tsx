'use client'
import { Typography } from '@/components/typography'
import React from 'react'
import { ThinkingWoman } from '@/assets/svg'
import RatingComp from '@/components/ratingComp'
import { tree } from 'next/dist/build/templates/app-page'
import OwnApartmentContainer from '@/components/ownApartmentContainer'
import { SecondButton } from '@/components/button'
import SearchWhiteIcon from "@/assets/svg/searchWhiteIcon.svg"
import CountrySelector from '@/components/selectCountries'
import DateSelector from '@/components/datePicker'
import { Input } from '@/components/input'
import countryList from 'react-select-country-list';

export default function Page() {

  const options = countryList().getData();
  return (
    <div className='px-[24px] py-[16px] bg-[#E6F1F1] h-full flex flex-col gap-[24px]'>
      <section className='flex p-4 sm:p-6 items-start gap-6 self-stretch justify-between rounded-[16px] bg-[var(--White,#FFF)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)]'>
        <div className='flex flex-col pb-4  gap-4  border border-red-500 h-full'>
          <div className='border border-green-500'>
            <div>
              <Typography className='text-[#828282] font-inter text-base font-normal leading-normal'>
              Good Morning, Jake
              </Typography>
            </div>
            <div>
            <Typography customClassName='text-[var(--Paircular-Variant-2,#008273)] font-poppins text-[30px] font-semibold leading-normal tracking-[-0.56px]'>
            Need an Apartment? We got you covered!
            </Typography>
            </div>
          </div>
          <div className='flex items-center flex-[1_0_0] gap-[12px] w-full border border-yellow-500 '>  
            <div>
              <CountrySelector options={options} placeholder='select country'/>
            </div>
            <div>
              <DateSelector/>
            </div>
            <div>
              <Input name='number' placeholder='Number of People'/>
            </div>
            <div>
              <SecondButton children={"search"} size="button" leftIcon={<SearchWhiteIcon/>} customClassName='flex items-center gap-2 rounded-custom bg-[#003D36] text-white rounded-[8px]' fit/>
            </div>
          </div>
        </div>
        <div>
          <ThinkingWoman/>
        </div>
      </section>
      <section className='flex gap-4'>
          <div className='flex p-4 items-center gap-6 self-stretch flex-grow'>

          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
              <RatingComp title='Available Apartments' number={205} isIncrease={true} rating='16.01%'/>
              <RatingComp title='Rented  Apartments' number={128} isIncrease={false} rating='2.09%'/>
            </div>
            <div>
              <OwnApartmentContainer/>
            </div>
          </div>
      </section>
    </div>
  )
}

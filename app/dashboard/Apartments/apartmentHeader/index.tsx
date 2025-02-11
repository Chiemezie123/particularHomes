'use client'
import React from 'react';
import { Typography } from '@/components/typography';
import { Input } from '@/components/input';
import SearchIconImage from "@/assets/svg/secondSearchIcon.svg"
import DateSelector from '@/components/datePicker';
import CountrySelector from '@/components/selectCountries';
export default function ApartmentHeader() {

    const SearchIcon = ()=>{
        return(
            <div className='flex w-[30px] h-[30px] p-[5px] items-center justify-center bg-[#F6F6F6] rounded-[10px]'>
                <SearchIconImage/>
            </div>
        )
    }

  return (
    <div className='flex p-4 items-center gap-[360px] self-stretch bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)]'>
        <div>
            <Typography font="poppins" fontWeight="bold" color="green2" customClassName='text-[16px] leading-normal'>
            My Apartments
            </Typography>
        </div>
        <div className='w-full flex items-center gap-4 flex-[1_0_0]'>
            <div className='w-full'>
            <Input
                name="number"
                placeholder="Search Apartments"
                customClassName="flex  bg-white"
                bgcolor="font-poppins text-[16px] font-normal leading-normal"
                icon2={<SearchIcon/>}
              />
            </div>
            <div className='w-full flex items-center gap-[1rem]'>
                <div className='w-1/3'>
                <Typography fontWeight="regular" font="Inter" color="filterBy" customClassName='text-[16px] leading-normal' >
                     Filter by
                </Typography>
                </div>
                <div className='w-full'>
                <CountrySelector placeholder='date' height='42px' backgroundIconColor=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

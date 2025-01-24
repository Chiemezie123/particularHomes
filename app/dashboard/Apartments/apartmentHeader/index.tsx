'use client'
import React from 'react';
import { Typography } from '@/components/typography';
import { Input } from '@/components/input';
import SearchIconImage from "@/assets/svg/secondSearchIcon.svg"
import DateSelector from '@/components/datePicker';
export default function ApartmentHeader() {

    const SearchIcon = ()=>{
        return(
            <div className='flex w-[40px] h-[40px] p-[10px] items-center justify-center bg-[#F6F6F6] rounded-[10px]'>
                <SearchIconImage/>
            </div>
        )
    }

  return (
    <div className='flex p-4 items-center gap-[296px] self-stretch bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)]'>
        <div>
            <Typography font="poppins" fontWeight="bold" color="green2" customClassName='text-[16px] leading-normal'>
            My Apartments
            </Typography>
        </div>
        <div className='flex items-center gap-6 flex-[1_0_0]'>
            <div>
            <Input
                name="number"
                placeholder="Search Apartments"
                customClassName="flex h-14 px-4 py-2 pl-4 justify-between items-center flex-[1_0_0] rounded-lg border border-gray-300 bg-white"
                bgcolor="font-poppins text-[16px] font-normal leading-normal "
                icon2={<SearchIcon/>}
              />
            </div>
            <div className='flex items-center flex-[1_0_0] gap-[1rem] '>
                <div>
                <Typography fontWeight="regular" font="Inter" color="filterBy" customClassName='text-[16px] leading-normal' >
                     Filter by
                </Typography>
                </div>
                <div>
                    <DateSelector/>
                </div>
            </div>
        </div>
    </div>
  )
}

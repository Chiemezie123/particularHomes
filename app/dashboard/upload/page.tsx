"use client"

import React from 'react'
import { Typography } from '@/components/typography';
import { Input } from '@/components/input';
import { TextField } from '@/components/textField';
import CountrySelector from '@/components/selectCountries';
import { optionsList } from '../page';
import { BiDollar } from "react-icons/bi";
import ImageNotification from '@/components/imageNotification';
import ImagePreview from '@/components/ImagePreview';
import { Button } from '@/components/button';

export default function Page() {
  return (
    <div className='w-full h-full py-[16px] bg-[#E6F1F1]'>
        <div className='w-full flex items-start gap-4 px-6 self-stretch'>
            <div className='flex flex-col !w-[700px] pb-6 items-start gap-4 rounded-lg bg-white'>
                <div className='flex h-[59px] items-center self-stretch'>
                    <div className='flex p-4 items-center gap-1'>
                        <Typography color='dashboardGreen' font="poppins" className='leading-normal' variant="h-m">
                        Apartment Details
                        </Typography>
                    </div>
                </div>
                <div className='flex flex-col px-4 items-start gap-4 self-stretch w-full'>
                    <div className='w-full'>
                        <Input name='' placeholder='Sunny Three-Bedroom Flat with Balcony' label='Title'/>
                    </div>
                    <div className='w-full'>
                        <TextField inputType="textarea" label="Description" placeholder='Enter description' className='placeholder:font-poppins'/>
                    </div>
                    <div className='w-full flex flex-1 items-end gap-2'>
                        <div className='w-full '>
                            <Input name='Select Location' placeholder='state' label='Select Location'/>
                        </div>
                        <div className='w-full'>
                            <CountrySelector placeholder='Select Country' options={optionsList} height='42px'/>
                        </div>
                    </div>
                    {/* features */}
                    <div>

                    </div>
                    {/* price */}
                    <div className='w-full'>
                        <Input name='price' icon1={<BiDollar />} placeholder='0.00' label='Price'/>
                    </div>
                    <div className='w-full'>
                        <CountrySelector placeholder='Per night' label='Payment Cycle' height='42px' backgroundIconColor='#008273'/>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col rounded-lg bg-white items-start gap-4 pb-[24px]'>
                <div className='flex h-[59px] items-center self-stretch'>
                    <div className='flex p-4 items-center gap-1'>
                        <Typography color='dashboardGreen' font="poppins" className='leading-normal' variant="h-m">
                        Upload Images
                        </Typography>
                    </div>
                </div>
                <div className='flex flex-col px-4 items-start gap-4 self-stretch w-full'>
                   <div className='w-full'>
                   <ImageNotification/>
                   </div>
                   <div className='w-full'>
                    <ImagePreview/>
                   </div>
                   <div>
                    <Button children="Upload Apartment" color="white" variant={"primary"} size={"tetiary"}/>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import { ExpandIcon } from '@/assets/svg';
import { Typography } from '../typography';
import { detailsComp } from './index.types';
import { GreenLocationIcon } from '@/assets/svg';
import { Button } from '../button';
import { Tick } from '@/assets/svg';
import { Minus ,Plus} from '@/assets/svg';
export default function DetailsComp(props:detailsComp) {
    const {title, location,price,featureArray,MainLocation,closeDetailComp,setCloseDetailComp} = props

    const getPrice = `$${price}`
    const [number, setNumber] = useState<number>(0)
    const increase = ()=>{
        setNumber((props)=> props++);
    }

    const decrease = ()=> {
        setNumber((props)=> props--)
    }
  return (
    <div  className={`flex w-[332px] h-[656px] p-4 flex-col items-start gap-4 shrink-0 bg-[#0b0b0b] transition-transform duration-500 ease-out transform ${
        closeDetailComp ? "ease-in-out !w-0 translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}>
        <div className={'cursor-pointer'} onClick={setCloseDetailComp} >
            <ExpandIcon/>
        </div>
        <div className='flex flex-col items-start justify-between self-stretch h-full'>
            <div className='flex flex-col items-start gap-3 self-stretch'>
                <div>
                    <Typography color="white" fontWeight="semibold" font="Inter" variant="h-l" customClassName=' leading-normal'>
                        {title}
                    </Typography>
                </div>
                <div>
                    
                </div>
                <div className='flex gap-[8px] items-center'>
                    <div>
                        <GreenLocationIcon/>
                    </div>
                    <div className=' not-italic  leading-normal'>
                       <Typography color="white" font="Inter" fontWeight="regular" variant="p-l">
                            {location}
                       </Typography>
                    </div>
                </div>
            </div>
            <div className='flex  h-fit gap-2'>
                 <Typography font='poppins' variant="h-xl" fontWeight="regular" color="white" customClassName='leading-normal'>{getPrice}</Typography> 
                 <Typography color="grey1" font="Inter"  fontWeight="medium"  variant="p-m">
                    per night
                 </Typography>
            </div>
            <div className='flex w-[161px] flex-col items-start gap-3'>
                <div>
                    <Typography color="grey1" font="Inter"  fontWeight="medium"  variant="p-m" >
                        Features
                    </Typography>
                </div>
                <div className='flex flex-col items-start gap-3 self-stretch'>
                    {featureArray.map((el)=>(
                        <div className='flex items-end gap-2 self-stretch'>
                            <div>
                                <Tick/>
                            </div>
                            <div >
                                <Typography color="grey2" font="Inter" fontWeight="regular" variant='p-m' >
                                {el.features}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Typography color="grey2" font="Inter" fontWeight="regular" variant="p-m">
                    {MainLocation}
                </Typography>
            </div>
            <div className='flex flex-col gap-4'>
                <div>
                    <Typography color="grey1" font="Inter"  fontWeight="medium"  variant="p-m">
                    Number of People
                    </Typography>
                </div>
                <div className='flex w-[88px] h-[32px] p-1 justify-between items-center bg-[#2E2E2E] rounded-[8px]'>
                    <div className='flex w-6 h-6 p-[3px] justify-center items-center shrink-0 bg-[#008273]  rounded-[8px] cursor-pointer'onClick={increase}>
                        <Minus/>
                    </div>
                    <div>
                        {number}
                    </div>
                    <div className='flex w-6 h-6 p-[3px] justify-center items-center shrink-0 bg-[#008273]  rounded-[8px] cursor-pointer' onClick={decrease}>
                    <Plus/>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center'>
                <Button children={'Rent Apartment'} className='flex px-8 py-4 justify-center items-center gap-1 self-stretch bg-[#008273] text-white '/>
            </div>
        </div>
    </div>
  )
}

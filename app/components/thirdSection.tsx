import React from 'react'
import VisionCards from '@/components/listingCards/visionCards'
import { visionCardDetails } from '@/constants/data'
export default function ThirdSection() {
  return (
            <div className='bg-[#EAF4EC]'>
                <section className='mx-auto max-w-[1440px]  h-[474px] border-b-2 border-[#003D36] bg-[#EAF4EC] py-[24px] px-[30px] '>
            <div className=' flex gap-4'>
                {visionCardDetails.map((item,index)=>(
                    <VisionCards key={index} logo={item.logo} title={item.title} text={item.text}/>
                ))}
            </div>
        </section>
            </div>
  )
}

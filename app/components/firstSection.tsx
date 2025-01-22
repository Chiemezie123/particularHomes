import React from 'react'
import LandingNavBar from "@/components/navBar/landingNavBar";
import paircularHomles from '@/assets/images/pairculiarholmes logo (2) 1.png'
import housing from '@/assets/images/unsplash_v-alpbKtoFs.png'
import Image from "next/image";
import { Typography } from "@/components/typography";
import { Button } from '@/components/button';

export default function FirstSection() {
    const handleClick = () => {
        console.log("tony")
      }
    
  return (
        <div className='bg-[#008273]'>
            <section className="mx-auto max-w-[1440px] relative bg-[#008273] pt-[14px] pl-[30px] h-[630px]">
    {/* Optionally include the background image */}
    {/* <div>
      <Image className="absolute" src={housing} alt="housing" width={400} height={400} />
    </div> */}
    
    <div className="relative">
      <LandingNavBar
        pathOneText={"About us"}
        pathTwoText="Join our community"
        pathThreeText="Volunteer"
        pathOne={"/aboutUs"}
        pathTwo={"/community"}
        pathThree={"/volunteer"}
        logo={paircularHomles}
        logoWidth={231}
        logoHeight={72}
        buttonText="Get Started"
        onClick={handleClick}
      />
    </div>
    <div className=' relative  mt-[20px] flex flex-col gap-2'>
      <div className='max-w-[600px]'>
        <Typography fontWeight="bold" customClassName='text-[#F6F6F6] font-montserrat text-[56px]  leading-[64px] tracking-[0.538px]'>
        Elevate Your LivingExperience, ExpandYour Horizons
        </Typography>
      </div>
      <div className='max-w-[528px]'>
        <Typography customClassName='text-[#F6F6F6] font-montserrat text-[18px] font-medium leading-[28px] tracking-[0.09px]'>
        We believe that your home should be an extension of your unique personality, a place where every corner tells a story, and each room resonates with your individuality. At paircular holmes, we meticulously craft experiences, connecting you with spaces that not only fulfill your housing needs but also elevate your entire living experience.
        </Typography>
      </div>
      <div>
        <Button children={'Get started'} className='flex w-[146px] h-[42px] px-[10px] py-[16px] justify-center items-center gap-[10px] flex-shrink-0
rounded-[8px] bg-[#F6F6F6]'/>
      </div>
    </div>
    <div className='absolute top-[-42px] bottom-0 right-0  w-[774px] h-[713px]'>
    <Image 
        src={housing} 
        alt='housing'  
        className='object-contain' 
        fill
    />
</div>

  </section>
        </div>

  )
}

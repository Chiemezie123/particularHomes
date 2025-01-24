import { Typography } from '@/components/typography';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import Image from 'next/image';
import { housingImages } from '@/constants/data';
import parlour from "@/assets/images/parlour.png"
import groupParlour from "@/assets/images/group.png"
export default function SecondSection() {
  return (
        <div className='bg-[#F6F6F6]'>
             <section className=" mx-auto max-w-[1440px]  py-[100px] bg-[#F6F6F6]">
      <div className="px-[30px] flex flex-col gap-[24px]">
        <div>
          <Typography fontWeight="bold" font='montserrat' color="green1" customClassName="  text-[56px]  leading-[64px] tracking-[0.538px]">
            Find Harmony in Every Home
          </Typography>
        </div>
        <div>
          <Typography fontWeight='medium' font="montserrat" color="green2"  customClassName=" text-[18px]  leading-[28px] tracking-[0.09px]">
            Discover Paircular Living
          </Typography>
        </div>
        <div className='flex gap-[20px]'>
            {housingImages.map((el, index) => (
                <div className="flex">
                <Image
                  key={index}
                  src={el.pic}
                  alt={`housing-image-${index}`}
                  width={400}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
              ))}
        </div>
      </div>
      <div className='relative flex justify-between mt-[100px]'>
          <div>
            <div className='relative w-[351px] h-[481px] bg-[#003D36]'></div>
            <div className='w-[496px] h-[391px] absolute top-[46px] left-[121px]'>
                <Image className=" object-contain " src={groupParlour} alt='parlour' fill/>
            </div>
          </div>
          <div className='relative my-auto'>
            <div className='bottom-0 w-full'>
                <div className='w-[668px]'>
                    <Typography fontWeight='bold' color="green1" font="montserrat" customClassName='text-[56px]  leading-[64px] tracking-[0.538px]'>
                    Your Ideal Home Awaits. Find it With Paircular Holmes
                    </Typography>
                </div>
                <div className='w-[560px]'>
                    <Typography fontWeight='medium' color="green1" font="montserrat" customClassName='text-[18px] leading-[28px] tracking-[0.09px]'>
                    At paircular holmes, our mission transcends the conventional. We aspire to be your premier destination for comprehensive home solutions on a global scale. With a commitment to excellence, we aim to redefine the way you perceive and engage with the concept of home. Whether it's finding the perfect abode, securing an ideal roommate, or transforming your living spaces.
                    </Typography>
                </div>
            </div>
          </div>
      </div>
    </section>
        </div>
  );
}



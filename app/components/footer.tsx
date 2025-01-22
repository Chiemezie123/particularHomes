import Image from 'next/image'
import React from 'react'
import FooterLogo from "@/assets/images/footerLogo.png"
export default function Footer() {
  return (
        <div className='bg-[#003D36]'>
             <section className='mx-auto max-w-[1440px] bg-[#003D36] h-[180px] flex items-center justify-center '>
            <Image src={FooterLogo} alt='footer' width={373} height={116}/>
    </section>
        </div>
  )
}

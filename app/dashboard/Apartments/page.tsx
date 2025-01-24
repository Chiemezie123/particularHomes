import React from 'react'
import ApartmentHeader from './apartmentHeader'
import ApartmentBody from './apartmentBody'

export default function Page() {
  return (
    <div className='w-full h-full px-[24px] py-[16px] bg-[#E6F1F1]'>
      <ApartmentHeader/>
      <ApartmentBody/>
    </div>
  )
}

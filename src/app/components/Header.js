import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className ='bg-green-400 text-white h-16  p-4 flex  ' >
       <Image src='/Amazon-logo.png' width={500} height={500} className='w-24 h-30 cursor-pointer ' alt='logo'/>
        <h1 className=' font-bold ml-9 cursor-pointer text-xs text-black'  > Hello 
   
        <span className='flex cursor-pointer text-lg'>      <Image src='/location-logo.png' width={500} height={500}  className='w-6 h-7 flex' alt='logo'/>select your address</span></h1>
        
        
        </div>
  )
}

export default Header
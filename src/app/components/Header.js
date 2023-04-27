import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className ='bg-green-500 text-white h-16  p-4  ' >
       <Image src='/Amazon-logo.png' width={500} height={500} className='w-24 h-30 ' alt='logo'/>
        <h1 className=' font-bold text-left  text-black' > Hello select your address</h1>
        
        
        </div>
  )
}

export default Header
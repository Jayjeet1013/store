import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
    <div className ='bg-green-400 text-white h-16  p-4 flex  ' >
       <Image src='/Amazon-logo.png' width={500} height={500} className='w-24 h-30 cursor-pointer ' alt='logo'/>
        <h1 className=' font-bold ml-9 cursor-pointer text-xs text-black'  > Hello 
   
        <span className='flex cursor-pointer text-lg'>      <Image src='/location-logo.png' width={500} height={500}  className='w-6 h-7 flex' alt='logo'/>select your address</span></h1>
        <input type="text" placeholder="Search Amazon.in" class="py-3 ml-4 px-5 w-1/2  focus:outline-none"/>
        <button class="bg-yellow-200 text-black hover:bg-gray-300  py-2 px-4 mr-2">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M8.5 15A6.5 6.5 0 1115 8.5a6.5 6.5 0 01-6.5 6.5zm0 1A7.5 7.5 0 108.5.5a7.5 7.5 0 000 15z" clip-rule="evenodd"></path>
      <path fill-rule="evenodd" d="M18.854 19.146a.5.5 0 01-.708 0L14.5 15.207a8.5 8.5 0 11.707-.707l3.939 3.939a.5.5 0 010 .708zM8.5 16a7 7 0 100-14 7 7 0 000 14z" clip-rule="evenodd"></path>
    </svg>
  </button>

  
    <Image src='/Flag_of_India.svg' width={500} height={500}  className='w-5  h-6 ml-2'/>
    <h2 className='w-5  ml-1'>EN</h2>
       <div class="">   
     <h4 class="ml-4 ">Hello,sign in</h4>
     <h2 class="flex ml-3">Account & Lists 
     <Image src='/arrow_drop_down.png' width={34} height={30} className='p-33 ' alt='logoof arrow' />
     </h2>
</div>

        </div>
  )
}

export default Header
import React from 'react'
import Image from 'next/image';
import tvphoto from 'public/tv.jpg'

import Link from 'next/link';

export default function body() {

   const items = [
    { id:1,
      title:"Television|| Upto 60% off",
      imageSrc:tvphoto,
      Description:"see more",
    },
    { id:1,
      title:"Television|| Upto 60% off",
      imageSrc:tvphoto,
      Description:"see more",
    },
    { id:1,
      title:"Television|| Upto 60% off",
      imageSrc:tvphoto,
      Description:"see more",
    },
    { id:1,
      title:"Television|| Upto 60% off",
      imageSrc:tvphoto,
      Description:"see more",
    },
   
   
   
    
  
   ];

  return (
    <div className='bg-gradient-to-r from-yellow-500 to-blue-500 bg-cover mx-72'>
    
    <div className='flex '>
      {items.map(({id,title,imageSrc,Description})=>(
         <div className='px-9 m-8 bg-white w-35 h-34'>  
          <h2 className='p-4 text-2xl'>{title}</h2>
        <Image src=  {imageSrc} className=' p-7 m-4  ' />
          <p className='p-4 text-blue-500'>{Description}</p>
        
         </div>

      ))}
    </div>
    <div className='flex '>
      {items.map(({id,title,imageSrc,Description})=>(
         <div className='px-9 m-8 bg-white'>  
          <h2 className='p-3 text-2xl'>{title}</h2>
        <Image src=  {imageSrc} className=' p-7 m-4  ' />
          <p className='p-3 text-blue-500'>{Description}</p>
        
         </div>

      ))}
    </div>
      
    
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import pumashoes from 'public/puma.jpg'

const Todaydeal = () => {

        const todaydeals = [
          {
                id:1,
                imageSrc:pumashoes,
                title:"70% off, Deal of the day",
                description:"Best deal on Puma",
          },
          {
                id:1,
                imageSrc:pumashoes,
                title:"70% off, Deal of the day",
                description:"Best deal on Puma",
          },
          {
                id:1,
                imageSrc:pumashoes,
                title:"70% off, Deal of the day",
                description:"Best deal on Puma",
          },
          {
                id:1,
                imageSrc:pumashoes,
                title:"70% off, Deal of the day",
                description:"Best deal on Puma",
          },

        ];
  return (
    <div>
      
        <div className=' mx-72 my-8 flex'>
                <h2 className='absolute p-1'>Todays Deals</h2>
                {todaydeals.map(({id,imageSrc,title,description})=>(
                      
                        <div className=''>  
                        <Image src={imageSrc} className='p-8'/>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        </div>
                        
                ))}
        </div>
        </div>
  )
}

export default Todaydeal


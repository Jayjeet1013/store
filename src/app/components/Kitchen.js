import React from 'react'
import Image from 'next/image'
import bartan from 'public/bartan.jpg'
import homeim from 'public/home.jpg'
const Kitchen = () => {

const kitchenSaman =[
   {
        id:1,
   
        imgSrc:bartan,
   },
   {
        id:1,
       
        imgSrc:bartan,
   },
   {
        id:1,
        
        imgSrc:bartan,
   },
   {
        id:1,
        
        imgSrc:bartan,
   },
   {
        id:1,
        
        imgSrc:bartan,
   },
];

const homeSaman =[
        {
                id:1,
                imgSrc:homeim,
        },
        {
                id:1,
                imgSrc:homeim,
        },
        {
                id:1,
                imgSrc:homeim,
        },
        {
                id:1,
                imgSrc:homeim,
        },
        {
                id:1,
                imgSrc:homeim,
        },
        {
                id:1,
                imgSrc:homeim,
        },
];

  return (

    <div>
        <div className='flex mx-72'>
                <h1 className='absolute p-5 '>Up to 70% off | Kitchen appliances from local stores near you</h1>
                {kitchenSaman.map(({id,title,description,imgSrc})=>(
                        <div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <Image src={imgSrc} className='p-8 my-5'/>
                        </div>
                ))}
        </div>
        <div className='flex mx-72'>
                <h1 className='absolute p-5 '>Up to 50% off | Give your home a make over</h1>
                {homeSaman.map(({id,title,description,imgSrc})=>(
                        <div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <Image src={imgSrc} className='p-8 my-5'/>
                        </div>
                ))}
        </div>
        </div>
  )
}

export default Kitchen
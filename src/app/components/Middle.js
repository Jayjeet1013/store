import React from 'react'
import Image from 'next/image'
import sellphoto from 'public/sellphoto.jpg'
const middle = () => {

        const middleSaman=[
        {id:1,
        title:"Sell on Amazon with 1-Click Launch Support",
        imgSrc:sellphoto,
        description:"Register Now",          
},
{id:1,
        title:"Sell on Amazon with 1-Click Launch Support",
        imgSrc:sellphoto,
        description:"Register Now",          
},
{id:1,
        title:"Sell on Amazon with 1-Click Launch Support",
        imgSrc:sellphoto,
        description:"Register Now",          
},
{id:1,
        title:"Sell on Amazon with 1-Click Launch Support",
        imgSrc:sellphoto,
        description:"Register Now",          
},
        ]
  return (
    <div>
        <div className='flex mx-72'>
                {middleSaman.map(({id,title,imgSrc,description})=>(
                        <div>
                          <h1>{title}</h1>
                          <Image src={imgSrc} className='p-3'/>
                          <p>{description}</p>
                        </div>
                ))}
        </div>
        </div>
  )
}

export default middle
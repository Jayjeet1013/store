import React from 'react'
import Image from 'next/image'
import beauty1 from 'public/BeautyPic/beauty1.jpg'
const BeautyPro = () => {

  const beautypro =[
    {
      id:1,
      imgSrc:beauty1,
    },
    {
      id:1,
      imgSrc:beauty1,
    },
    {
      id:1,
      imgSrc:beauty1,
    },
    {
      id:1,
      imgSrc:beauty1,
    },
    {
      id:1,
      imgSrc:beauty1,
    },
    {
      id:1,
      imgSrc:beauty1,
    },

  ]
  return (
    <div>
       <div className='flex mx-72 '>
        <h1 className='absolute m-3'>Upto 40% off | Beauty products from stores near you</h1>
        {beautypro.map(({id,imgSrc})=>(
          <div className='p-3 m-5'>
             <Image src={imgSrc}/>
          </div>
        ))}
       </div>
    </div>
  )
}

export default BeautyPro
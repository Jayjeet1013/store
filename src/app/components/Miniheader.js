import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';

export default function Miniheader() {
  return (
    < div className='h-8 flex  text-white  bg-blue-600'>
   <div className='flex'>
    <h5 className='flex px-6 py-1.5 '><AiOutlineMenu /><span className='px-2 font-bold'>All</span> </h5>
   </div>
   <div className='flex space-x-4  py-1'>
        <p>Amazon miniTV </p>
        <p>Sell </p>
        <p>Best Sellers </p>
        <p>Mobiles </p>
        <p>Today's Deals </p>
        <p>Customer Services </p>
        <p>New Releases </p>
        <p>Electronics </p>
        <p>Prime </p>
        <p>Home & Kitchen </p>
        <p>Fashion </p>
        <p>Amazon Pay </p>
        <p>computers </p>
        <p>Beauty & Personal Care</p>
        <p>Books </p>
        <p>Coupons </p>
        <p>Toys & Games </p>
   </div>
    </div>

  )
}

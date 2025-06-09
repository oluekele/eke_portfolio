'use client'

import useContactStore from '@/store/useCounterStore';

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
   const { setContact, contact } = useContactStore();
  return (
    <div className={`flex justify-between items-center mb-6 text-2xl font-bold ${contact === true ? "pointer-events-none opacity-60" : ""}`}> 
      <Image src={'/logo.png'} alt='Eke logo' width={150} height={50}/>
    
      <Link href="#" onClick={()=> setContact(true)} className='text-white'>
        <button className="mt-4 border-2 border-white px-6 py-2 font-semibold text-white shadow-[4px_4px_0px_white] hover:shadow-none hover:bg-white hover:text-black transition">
          Let&apos;s Talk
        </button>
        
      </Link>
    </div>
  )
}

export default Navbar

import Link from 'next/link'
import React from 'react'
import Nav from './Nav';

function Header() {
  return (
   <div className={'container mx-auto flex items-center border-b-2 px-6 py-2 h-24'}>
   <h1 className='font-bold'>ZOXOZO</h1>
   <div className='grow'>
   <div className='flex items-center justify-center gap-10 md:gap-20'>

   
   <Link href="about">About</Link>
   <Link href="movie">Blog</Link>
   <Link href="contact">Contact</Link>

   </div>

   </div>
   </div>
  )
}

export default Header;
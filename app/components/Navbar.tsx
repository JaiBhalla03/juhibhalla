import React from 'react'
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='px-32 py-2 flex items-center w-full justify-between text-sm'>
        <div className='flex items-center gap-14'>
            <div className='cursor-pointer bg-[#F57606] rounded-full h-14 w-14 flex justify-center items-center text-[#0f0f0f] font-bold'>Juhi</div>
            <ul className='flex items-center gap-10'>
                <li className='hover:underline cursor-pointer'>About</li>
                <li className='hover:underline cursor-pointer'>Experience</li>
                <li className='hover:underline cursor-pointer'>Resume</li>
                <li className='hover:underline cursor-pointer'>Contact</li>
            </ul>
        </div>
        <div className='flex gap-10 items-center'>
            <div className='text-2xl'><FaLinkedin /></div>
            <div className='text-2xl'><FaInstagramSquare /></div>
        </div>
    </nav>
  )
}

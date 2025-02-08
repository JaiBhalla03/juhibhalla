import Image from 'next/image'
import React from 'react'
import heroImage from '../../public/images/heroImage.png';

export default function Hero() {
  return (
    <div className='px-32 pt-10 flex gap-8'>
        <div className='w-80 flex flex-col gap-2'>
            <Image src={heroImage} alt='' className='w-80 h-52 object-cover'/>
            <div className='flex flex-col gap-4'>
                <div className='text-sm'>More of my Experience and abilities in the summary of the work I have done.</div>
                <div className='font-gideon'>DOWNLOAD CV</div>
            </div>
        </div>
        <div className='text-[8rem] font-[500] leading-[7.5rem] -translate-y-4'>
            <div>HELLO, MY</div>
            <div>NAME IS</div>
            <div className='flex gap-4'>
                <div className='font-gideon bg-[#F57606] text-[#0f0f0f]'>JUHI</div>
                <div className='text-[1rem] flex items-start'>
                    <div className='-translate-y-[3rem]'>1997</div>
                </div>
            </div>
            <div>MANAGER</div>
            <div>FROM</div>
            <div>INDIA.</div>
        </div>
    </div>
  )
}

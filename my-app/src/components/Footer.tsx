import React from 'react'
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='h-[25vh] bg-[#364044] flex flex-col items-center justify-center text-white gap-y-2 relative z-10'>
        <p className='text-5xl'>Guillaume dev</p>
        <p className='text-lg font-light font-[Oswald]'>Copyright 2024 © Guillaume Lopez</p>
        <div className='text-2xl'>
            <FaLinkedin />
        </div>
    </footer>
  )
}

export default Footer
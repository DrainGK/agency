

import BookButton from '@/components/BookButton'
import Navbar from '@/components/Navbar'
import React from 'react'
import Wave from 'react-wavify'

function HomePage() {
  return (
    <main className='h-screen w-screen'>
        <Navbar />
        <section className='h-full w-full'>
          <div className='h-full w-full bg-[url("./topography.svg")] bg-cover  opacity-5 absolute z-[0]'/>
          <div className='md:w-[55%] w-[88%] md:h-[45%] h-[40%] flex flex-col justify-end mx-auto z-1 relative'>
            <h1 className='z-11 md:text-4xl text-2xl my-[1rem] text-[#FFA41B]'><span className='font-[Oswald] font-light md:text-3xl text-white'>a </span>Global web agency,</h1>
            <h2 className='z-11 md:text-2xl text-xl font-[Oswald] font-light'>For your <span className='font-[Huntsman] md:text-3xl text-[#FFA41B]'>growth</span> regarding to your needs。</h2>
            <div className='mt-[1.7rem]'>
              <BookButton/>
            </div>
          </div>
          <Wave 
            fill='#404C51'
            className='h-[50vh] absolute bottom-0 z-0'
            paused={false}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.2,
              points: 4
            }}
          />
        </section>
        <section className='h-full bg-[#404C51]'>

        </section>
        <section className='h-full bg-[#404C51]'>

        </section>
        <section className='h-full bg-[#404C51]'>

        </section>
    </main>
  )
}

export default HomePage
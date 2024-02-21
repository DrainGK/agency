"use client"

import Navbar from '@/components/Navbar'
import React from 'react'
import Wave from 'react-wavify'
import { motion, useScroll, useTransform } from "framer-motion"
import MovingText from '@/components/MovingText'
import { useRef } from 'react'
import { InView } from 'react-intersection-observer';

const staggeredVar = {
  initial:{
    y: "15vh",
    transition:{
      duration: 0.5,
    },
  },
  open: {
    y:0,
    transition: {
      duration: 0.7
    }
  }
}

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.9,
    },
  },
  open:{
    transition:{
      staggerChildren: 0.0
    }
  }
}

const textVariants = {
  initial:{
    y: "5vh",
    transition:{
      duration: 0.5,
    },
  },
  open: {
    y:0,
    transition: {
      duration: 0.7
    }
  }
};


function HomePage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start' ]
  })

  const text1 = useTransform(scrollYProgress, [0.1, 0], [0, 25]);
  const text2 = useTransform(scrollYProgress, [0.1, 0], [0, 25]);
  const text3 = useTransform(scrollYProgress, [1, 0], [0, 25]);
  const text4 = useTransform(scrollYProgress, [2, 0], [0, 25]);

  return (
    <main className='h-screen w-screen'>
        <Navbar />
        <section className='h-[80%] w-full relative'>
          <div className='h-full w-full bg-[url("./topography.svg")] bg-cover  opacity-5 absolute z-[0]'/>
            <motion.div className='md:w-[60%] w-[88%] md:h-[65%] h-[40%] flex flex-col justify-end mx-auto z-1 relative'
            variants={containerVars}
            initial="initial"
            animate="open"
            >
             <div className='overflow-hidden'>
              <motion.h1 variants={staggeredVar} className='z-11 md:text-7xl text-3xl my-[1rem] text-[#FFA41B]'>Bespoke Web Design</motion.h1>
             </div>
              <div className='overflow-hidden'>

              <motion.h2 variants={staggeredVar} className='z-11 md:text-4xl text-2xl font-[Oswald] font-light'>to <span className='font-[Huntsman] md:text-4xl text-[#FFA41B]'> Elevate</span> Your compagny。</motion.h2>
              </div>
            </motion.div>
          <Wave 
            fill='#404C51'
            className='h-[25vh] absolute bottom-0 z-0'
            paused={false}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.2,
              points: 4
            }}
          />
        </section>
        <section className='h-[75%] bg-[#404C51] flex flex-col justify-center overflow-hidden'>
        
          <div className='w-[60%] text-4xl leading-loose font-[Oswald] font-light mx-auto'>
            <InView triggerOnce={false} threshold={0.5}>
              {({ inView, ref}) => (
                <motion.div ref={ref} 
                className="overflow-hidden flex items-center"
                variants={containerVars}
                initial="initial"
                animate={inView? "open" : "initial"}
                >
                  <motion.p
                  variants={textVariants} 
                  className=''>
                    Welcome to the home of hassle-free web magic. We're in the business of making your online 
                  </motion.p>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce={false} threshold={0.5}>
              {({ inView, ref}) => (
                <motion.div ref={ref} 
                className="overflow-hidden flex items-center"
                variants={containerVars}
                initial="initial"
                animate={inView? "open" : "initial"}
                >
                  <motion.p
                  variants={textVariants} 
                  className=''>
                    presence as easy as pie and as impactful as a morning coffee. Our team is dedicated to 
                  </motion.p>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce={false} threshold={0.5}>
              {({ inView, ref}) => (
                <motion.div ref={ref} 
                className="overflow-hidden flex items-center"
                variants={containerVars}
                initial="initial"
                animate={inView? "open" : "initial"}
                >
                  <motion.p
                  variants={textVariants} 
                  className=''>
                   designing sleek, user-friendly websites that do the heavy lifting for you. Partner with us and 
                  </motion.p>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce={false} threshold={0.5}>
              {({ inView, ref}) => (
                <motion.div ref={ref} 
                className="overflow-hidden flex items-center"
                variants={containerVars}
                initial="initial"
                animate={inView? "open" : "initial"}
                >
                  <motion.p
                  variants={textVariants} 
                  className=''>
                    watch your digital dreams take flight—no tech talk needed, just results. 
                  </motion.p>
                </motion.div>
              )}
            </InView>
          </div>
          
        </section>
        <section className='h-full bg-slate-100'>
            <p className='w-[90%] mx-auto flex justify-end text-black text-[200px] pt-4'>SERVICES</p>
            <div>
              <div>

              </div>
              <div>
                
              </div>
            </div>
        </section>

        <section className='h-full bg-white'>
            <p className='w-[90%] mx-auto text-black text-[300px] pt-4'>WORK</p>
        </section>

        <section className='h-full bg-white'> 
          
        </section>
        <footer className='h-[25%] bg-[#364044] text-[#404C51]'>
            <p className='h-full w-[95%] mx-auto flex items-center text-[150px]'>footer</p>
        </footer>
    </main>
  )
}

export default HomePage
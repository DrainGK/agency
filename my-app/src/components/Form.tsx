import React from 'react'

function Form() {
  return (
    <form action="submit" className='w-full font-[Oswald] font-light text-3xl flex flex-col gap-y-12'>

        <h3 className='text-6xl'>START A <br /> <strong className='font-[Huntsman]'>PROJECT</strong></h3>

        <h3 className='font-normal '>About your project</h3>

        <div className='flex flex-col gap-y-4'>
            <p>1.Do you have an existing website?*</p>
            <select id="website" className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '> 
                <option className='text-black' value="I have one">I have one</option>
                <option className='text-black' value="I want one">I want one</option>
            </select>
            <input type="text" placeholder='Existing website (optional)' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '/>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>2.Project Type*</p>
            <select id="project" className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '>
                <option className='text-black' value="Web design">Web design</option>
                <option className='text-black' value="Development">Development</option>
                <option className='text-black' value="SEO">SEO</option>
            </select>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>3.Project budget*</p>
            <select id="budget" className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '>
                <option className='text-black' value="-50 000￥">-50 000￥</option>
                <option className='text-black' value="50 000￥ -  100 000￥">50 000￥ -  100 000￥</option>
                <option className='text-black' value="100 000￥ -  200 000￥">100 000￥ -  200 000￥</option>
                <option className='text-black' value="+200 000￥">+200 000￥</option>
            </select>
        </div>

        <h3 className='font-normal text-4xl'>About you</h3>

        <div className='flex flex-col gap-y-4'>
            <p>4.What's your name?</p>
            <div className='flex flex-col gap-y-2'>
                <input type="text" placeholder='First name*' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '/>
                <input type="text" placeholder='Last name*' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '/>
            </div>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>5.About your company</p>
            <select id="company" className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '>
                <option className='text-black' value="Do you have compagny?">Do you have compagny?</option>
                <option className='text-black' value="I have one">I have one</option>
                <option className='text-black' value="It's a personal request">It's a personal request</option>
            </select>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>6.Contact details</p>
            <input type="email" id="email" placeholder='Email address*' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '/>
            <input type="text" id="tel" placeholder='Telephone*' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '/>
        </div>

        Any other details

        <div className='flex flex-col gap-y-4'>
            7.Any other details?
            <textarea id="message" placeholder='Your message (optional)' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out '></textarea>
        </div>

        <div className='w-full flex justify-end'>
            <button
                className={`
                    relative w-fit z-0 flex items-center gap-2 overflow-hidden  border-[1px] 
                    border-[#FFA41B] px-6 py-4 font-[Oswald] font-light
                    uppercase text-[#FFA41B] transition-all duration-500 md:text-2xl text-4xl
                    
                    before:absolute before:inset-0
                    before:-z-10 before:translate-x-[150%]
                    before:translate-y-[150%] before:scale-[2.5]
                    before:rounded-[100%] before:bg-[#FFA41B]
                    before:transition-transform before:duration-1000
                    before:content-[""]

                    hover:scale-105 hover:text-white
                    hover:before:translate-x-[0%]
                    hover:before:translate-y-[0%]
                    active:scale-95`}
                >
                <span>Send Message</span>
            </button>
        </div>
    </form>
  )
}

export default Form
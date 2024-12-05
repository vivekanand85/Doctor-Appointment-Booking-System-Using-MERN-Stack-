import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded px-6 md:px-10'>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:md-[-30px]'>
            <p className='text-3xl  md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appoitment <br/> With Trusted Doctors </p>
        <div className='flex flex-col md:felx item-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt='header'/>
          <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
          schedule your appointment hassle-free
          </p>
        </div>
        <a href="#spaciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-ray-600 text-sm m-auto md:m-0 hover:scale-105 tranition-all duration-300'>
          Book appointment <img src={assets.arrow_icon} alt='book appointment' className='w-3' />
        </a>
        </div>

      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt='header img'/>
      </div>
    </div>
  )
}

export default Header
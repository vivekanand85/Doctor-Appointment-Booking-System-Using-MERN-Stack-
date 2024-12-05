import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';

 const Navbar = () => {
    const navigate=useNavigate();

    const[showMenu,setShowMenu]=useState(false);
    const[token,setToken]=useState(true);



  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
     <img className='w-44 cursor-pointer' src={assets.logo} alt='logo'/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='bg-primary w-3/5 h-0.5 border-none outline-none m-auto'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='bg-primary w-3/5 h-0.5 border-none outline-none m-auto'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='bg-primary w-3/5 h-0.5 border-none outline-none m-auto'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>
                CONTACT
            </li>
            <hr className='bg-primary w-3/5 h-0.5 border-none outline-none m-auto'/>
        </NavLink>
    </ul>

    <div className='flex item-center gap-4'>
    {
        token?<div className='flex item-center gap-2 cursor-pointer group realtive'>
        <img className='rounded-full w-8' src={assets.profile_pic} alt='profile pic'/>
         <img className='w-2.5' src={assets.dropdown_icon} alt='drop down pic'/>
         <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block'>
            <div className='min-w-48  bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>navigate('my-appointement')} className='hover:text-black cursor-pointer'>My Appoitment</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
            </div>
         </div>
        </div>:<button  onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>

    }
    </div>
    </div>

  )
 }
export default Navbar
import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { ImMenu } from "react-icons/im";
const Navbar = () => {
     const [visible,setVisible] = useState(false);



  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img className='w-24' src='https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Emblem.png' alt="" />
 
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
         <NavLink to='/' className='flex flex-col items-center gap-1'>

            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
         </NavLink>
         <NavLink to='/collection' className='flex flex-col items-center gap-1'>

            <p>COLLECTION</p>
            <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
         </NavLink>
         <NavLink to='/about' className='flex flex-col items-center gap-1'>

            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
         </NavLink>
         <NavLink to='/contact' className='flex flex-col items-center gap-1'>

            <p>CONTACT</p>
            <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
         </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
            <img className='w-5 cursor-pointer' src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png" alt="" />
            <div className='group relative'>
                <img className='w-5 cursor-pointer'  src="https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png" alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 bg-slate-100 px-5 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                        
                    </div>
                </div>
            </div>
            <Link className='relative' to='/cart'>
            <MdOutlineShoppingCart className='w-6 min-w-5 h-6' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black leading-4 text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <TbMenuDeep onClick={()=> setVisible(true)} className='w-6 min-w-5 h-6 sm:hidden'/>
        </div>
        {/* //sidebar menu for small screen */}
           <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
             <div className="flex flex-col text-gray-600 ">
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer '>
                 <IoChevronBackSharp className='w-5 h-4' />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
             </div>
           </div>
    </div>
  )
}

export default Navbar
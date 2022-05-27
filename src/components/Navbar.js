import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState (false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (  
        <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-3 border-b border-[#b4f8f8]'>
             <h1 className='w-full text-3xl font-bold text-[#001414] ' > Stylistonduty</h1> 
            <ul className='hidden md:flex hover:cursor-pointer '>
                <li className='p-4 hover:bg-[#ADE3E3] '>Home</li>
                <li className='p-4 hover:bg-[#ADE3E3] '>Services</li>
                <li className='p-4 hover:bg-[#ADE3E3] '>Bookings</li>
                <li className='p-4 hover:bg-[#ADE3E3] '>contact</li>
            </ul>

            {/* moblie responsive */}
             <div onClick={handleNav} className='block md:hidden'>
                 {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
                
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[50%] h-[60%]  bg-[#ffffff] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#001414] m-4' > Stylistonduty</h1> 

                <ul className='pt-12'>
                <li className='p-4 border-b border-[#b4f8f8] font-bold'>Home</li>
                <li className='p-4 border-b border-[#b4f8f8] font-bold'>Services</li>
                <li className='p-4 border-b border-[#b4f8f8] font-bold '>Bookings</li>
                <li className='p-4 font-bold '>contact</li>
                </ul>
            </div>
        </div>
    );
}

 
export default Navbar;
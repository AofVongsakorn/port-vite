import React, { useContext } from 'react';
import { navLinks } from '../Data';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useState } from 'react';
import Navlinks from './Navlinks';

import { motion } from "framer-motion";
import { useEffect } from 'react';
import Toggle from './Toggle';
import { ThemeContext } from './Toggle';


const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [isTop, setIsTop] = useState(false);


  

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsTop(window.scrollY > 20)
        })
    }, [])


    const theme = useContext(ThemeContext)
    const dark = theme.state.dark
   

    return (
        <div className={`${isTop? 'shadow-lg' : ''} ${dark? 'bg-sky-900': 'bg-white'}
        fixed top-0 left-0 z-20 w-full`}>
            <div className='container mx-auto flex items-center justify-between py-4 px-2'>

                <div className='flex justify-center items-center gap-2'>
                    <div className='rounded-full w-8 h-8 bg-blue flex items-center 
                justify-center text-white font-bold'>A</div>
                    <p className='text-xl'>
                        Aof <span className=' opacity-80'>Vongsakorn</span>
                    </p>
                    <Toggle />

                </div>

                <div className='md:flex hidden items-center justify-center gap-6'>
                    {navLinks.map((navLink) => {
                        return (
                            <Navlinks key={navLink.id} {...navLink} setToggle={setToggle} />
                        )
                    })}
                </div>

                <HiMenuAlt3
                    className='cursor-pointer text-3xl md:hidden'
                    onClick={() => setToggle(!toggle)} />

            </div>


            {toggle &&
                <motion.div

                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    className='fixed right-0 top-0 bg-blue h-screen text-white w-80'>
                    <div className='flex flex-col gap-8 mt-[40%] ml-[30%]'>
                        {navLinks.map(navLink => {
                            return (
                                <Navlinks key={navLink.id} {...navLink} setToggle={setToggle} />
                            )
                        })}
                    </div>
                    <HiX className='absolute right-4 top-8 text-3xl cursor-pointer' onClick={() => setToggle(!toggle)} />
                </motion.div>}

        </div>
    )
}

export default Nav
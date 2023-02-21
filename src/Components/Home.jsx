import React from 'react'
import hero from '../assets/mypic.jpg'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className='section flex items-center justify-center' id='home'>

            <div className='grid md:grid-cols-2 place-items-center gap-8'>
                <div className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full 
            overflow-hidden shadow-heroSadow boerder-[20px] border-solid border-ghostWhite'>
                    <img
                        src={hero}
                        alt="hero-img"
                        className='w-full h-full object-cover'
                    />
                </div >
                <motion.div 
                    initial={{opacity: 0, x: -50}}
                    whileInView= {{opacity:1, x:0}}
                    transition={{duration: 0.3}}                
                >
                    <div className='text-grey sm:text-[1.5rem] mb-4' >Front-end Developer</div>
                    <h2 className='text-[2rem] sm:text-[3rem] font-bold mb-4'>Vongsakorn Srithaworn</h2>
                    <p className='opacity-80 text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                        repellendus ipsa iste cum, consequatur odio tempore sequi fugiat laboriosam Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Odio modi doloribus perferendis, est iure facere? Distinctio, voluptatum?
                        Ducimus aliquam, dolore dolores ab,
                    </p>
                </motion.div>

                <div className='flex mt-4 gap-4'>
                    <a href="" className='py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md'>
                        Dowload Cv</a>
                    <a href="#contact" className='py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md'>
                        Contact
                    </a>
                </div>

            </div>



        </div>
    )
}

export default Home
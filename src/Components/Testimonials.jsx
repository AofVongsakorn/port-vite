import React from 'react'
import { testimonials } from '../Data'
import { motion } from 'framer-motion'

const Testimonials = () => {

    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3
            }
        }


    }
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }


    return (

        <div className='section' id='testimonials'>
            <div className='md-8'>
                <h2 className='text-[1.5rem] font-bold'>Testimonials</h2>
                <div className='w-14 h-[3px] bg-blue'></div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView='visible'


                className='grid sm:grid-cols-2 md:gap-20 gap-10 mb-16'>
                {testimonials.map(t => {
                    const { id, name, image, business } = t;
                    return (
                        <motion.div
                            variants={item}
                            
                            className='relative shadow-lg p-6 hover:shadow-none'
                            key={id}>
                            <p className='text-[0.9rem] italic opacity-80'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ad dolorem optio, doloribus quam, omnis ea at sed illum
                                accusantium minima pariatur asperiores assumenda laudantium
                                molestias ab ratione possimus, quas molestiae.
                            </p>
                            <div className='mt-6'>
                                <div className='font-bold'>{name}</div>
                                <div className='text-[0.9rem] opacity-80 text-blue'>{business}</div>


                            </div>

                            <div className='absolute w-16 h-16 bottom-[1.22rem] right-[2rem]'>
                                <img src={image} alt="" className='w-full h-full object-cover rounded-full' />
                            </div>

                        </motion.div>
                    )
                })}
            </motion.div>
            <div className="text-center">

                <div className='text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold'>Wanna Start Woork with me?</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae voluptatum 
                    tenetur rerum magnam facilis in distinctio delectus aspernatur numquam laboriosam 
                    cumque quasi neque perspiciatis quam cum, iste animi non?</p>
                <a href="#contact" className='text-[0.9rem] text-blue'>
                    Contact Me
                </a>

            </div>


        </div>

    )
}

export default Testimonials
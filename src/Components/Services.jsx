import React from 'react'
import { services } from '../Data'
import { serviceFinishes } from '../Data'

const Services = () => {
    return (
        <div className='section' id='services'>
            <div className='md-8'>
                <h2 className='text-[1.5rem] font-bold'>What I do</h2>
                <div className='w-14 h-[3px] bg-blue'></div>
            </div>

            <div className='grid sm:grid-cols-2 gap-8 mt-8'>

                {services.map(s => {
                    return (
                        <div key={s.id} className='flex flex-col gap-4 p-4 hover:bg-slate-300 rounded-lg'>
                            <div className='flex flex-row gap-4'>
                                <div className='text-blue text-[2rem]'>{s.icon}
                                </div>
                                <h3 className='text-xl font-bold'>{s.title}</h3>
                            </div>
                            <p className='opacity-80 mt-4 text-[0.9rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime autem
                                perferendis doloremque ad ab voluptatem illo laboriosam. Dicta esse quisquam quod
                                impedit culpa veniam labore ipsam est odit et. Voluptatum!</p>

                        </div>
                    )
                })}

            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-4 mt-12 gap-4'>

                {serviceFinishes.map( s => {
                    return (
                        <div className='text-center border border-solid border-grey p-8 rounded-md'>
                            <div className='flex justify-center text-blue mb-4 text-[1.5rem]'>{s.icon}</div>
                            <div className='mb-4 text-[0.9rem] font-bold'>{s.text}</div>
                            <div className='text-5xl text-grey'>{s.amount}</div>

                        </div>
                    )
                })}

            </div>



        </div>
    )
}

export default Services
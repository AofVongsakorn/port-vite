import React from 'react'
import { contacts } from '../Data'

const Contact = () => {
  return (

    <div className='container mx-auto mb-7 px-6 ' id='contact'>

        <div className='mb-8'>
            <h2 className='text-[1.5rem] font-bold'>Contact</h2>
            <div className='w-14 h-[3px] rounded-sm bg-blue'></div>

        </div>

        <div className='shadow-lg p-4 max-w-[700px] mx-auto'>
            <div className=' grid gap-8 sm:grid-cols-3'>
                {contacts.map( c => {

                    const {id, icon, text} = c

                    return (
                        <div className='flex gap-2 items-center flex-col' key={id}>
                            <div className='text-blue text-xl'>{icon}</div>
                            <div className='text-[0.9rem] opacity-80'>{text}</div>


                        </div>
                    )
                })}
            </div>

            <div className='mt-8 flex gap-12 flex-wrap justify-center items-center'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='mb-5'>
                        <input type="text" className='outline-none bg-transparent border 
                        border-solid border-blue p-2 w-[100%]  text-[0.9rem]' placeholder='Name'/>
                    </div>
                    <div className='mb-5'>
                        <input type="text" className='outline-none bg-transparent border 
                        border-solid border-blue p-2 w-[100%] text-[0.9rem]' placeholder='Email'/>
                    </div>
                    <div className='mb-5'>
                        <input type="text" className='outline-none bg-transparent border 
                        border-solid border-blue p-2 w-[100%]  text-[0.9rem]' placeholder='Budget'/>
                    </div>
                </div>

                <div >
                    <textarea placeholder='Project Description' className='w-[270px]  h-[200px] outline-none 
                    bg-transparent border border-solid border-blue text-[0.9rem]'></textarea>

                    <div className=' mt-2 text-end '>
                            <a href="" className='text-[0.9rem] text-blue '> Send message</a>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact
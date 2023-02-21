import React from 'react'
import { blogs } from '../Data'

const Blog = () => {
  return (
    <div className='section' id='blog'>

        <div className='mb-8'>
            <h2 className='text-[1.5rem] font-bold'>Last Articles</h2>
            <div className='w-14 h-[3px] rounded-sm bg-blue'></div>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {blogs.map(b => {
                return (
                    <div className='shadow-lg hover:shadow-none p-2' 
                         key={b.img}>
                        <img src={b.image} alt="" />

                        <div className='mt-3'>
                            <div className='text-xl font-bold'>{b.title}</div>
                            <p className='opacity-80 text-[0.9rem] mt-2'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nesciunt. 
                                Atque, odit illum expedita minima maxime doloremque reprehenderit voluptatibus 
                                error optio saepe, ut dolor fugiat necessitatibus eaque ex quod quasi!
                            </p>
                            <button className='text-[0.9rem] mb-2 text-blue'>Read more</button>
                        </div>

                    </div>
                )
            })}
            
        </div>


    </div>
    
  )
}

export default Blog
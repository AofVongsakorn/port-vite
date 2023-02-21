import React from 'react'
import { useEffect, useState } from 'react'
import { btns } from '../Data'
import { projects } from '../Data'
import { motion, AnimatePresence } from 'framer-motion'

const Project = () => {

  const [filterImage, setFilterImage] = useState(null);

  useEffect(() => {
    setFilterImage(projects);

  }, []);

  const handleClick = (e) => {

    let btnType = e.target.value;
    console.log(btnType);
    const newFilterImages = projects.filter(p => {
      return p.value === btnType;
    });
    btnType !== 'all' ? setFilterImage(newFilterImages) : setFilterImage(projects)

  }

  return (
    <div className='section' id='projects'>
      <div className='md-8'>
        <h2 className='text-[1.5rem] font-bold'>My Collections</h2>
        <div className='w-14 h-[3px] rounded-sm bg-blue'></div>

      </div>

      <div className='flex flex-wrap gap-8 mt-8'>
        {btns.map((btn) => {
          return (
            <button key={btn.id} value={btn.value} onClick={handleClick}>{btn.name}</button>
          )
        })}
      </div>

      <AnimatePresence>
        <div className='grid sm:grid-cols-2 md:grid-cols-3'>
          {filterImage && filterImage.map(filterImage => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}

                key={filterImage.id}>
                <img src={filterImage.image} alt="" />
              </motion.div>
            )
          })}
        </div>
      </AnimatePresence>

    </div>
  )
}

export default Project
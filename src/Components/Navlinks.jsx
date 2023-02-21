import React from 'react'

const Navlinks = ({href, text, setToggle}) => {
  return (
    <div onClick={prev => setToggle(!toggle)}>
        <a href={`#${href}`} className='text-xl' >{text}</a>
    </div>
  )
}

export default Navlinks
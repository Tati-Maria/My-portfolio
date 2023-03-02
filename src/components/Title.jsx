import React from 'react'

const Title = ({title}) => {
  return (
    <div>
        <h2 className='font-space text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 font-semibold'>{title}</h2>
    </div>
  )
}

export default Title
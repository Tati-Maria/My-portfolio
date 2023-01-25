import React from 'react'

const Title = ({title}) => {
  return (
    <div>
        <h2 className='font-medium text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>{title}</h2>
    </div>
  )
}

export default Title
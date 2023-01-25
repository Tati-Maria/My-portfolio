import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='max-w-5xl mx-auto p-4'>
        {children}
    </div>
  )
}

export default Layout;
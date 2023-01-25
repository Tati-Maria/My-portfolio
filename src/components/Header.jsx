import React from 'react'
import Layout from '../layout/Layout';
import {motion} from "framer-motion"

const Header = () => {
  return (
    <Layout>
    <nav className='py-6'>
        <ul className='text-end space-x-16 text-lg'>
            <li className='inline-block'>
                <a href="#about">About</a>
            </li>
            <li className='inline-block'>
                <a href="#projects">Projects</a>
            </li>
            <motion.li 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            className='inline-block w-max text-black bg-white py-1 px-6 rounded-lg'>
                <a href="#" download="Maria's Resumé">My Resumé</a>
            </motion.li>
        </ul>
    </nav>
    <motion.section
    animate={{opacity: 1, scale: 1}}
    transition={{
        duration: 1,
        ease: [0.5, 0.71, 1, 1.5]
    }} 
    initial={{
        opacity: 0,
        scale: 0.5
    }}
    className='flex items-center justify-center flex-col h-full mt-52 space-y-6'>
        <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center'>Hi, I'm Maria</h1>
        <span className='text-xl lg:text-3xl capitalize'>A front-end developer</span>
        <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className='text-lg py-3 px-8 bg-gradient-to-r from-blue-700 to-green-700 rounded-full shadow-md'
        >
            <a href="mailto:rosatati14@gmail.com">
            Connect with me
            </a>
        </motion.button>
    </motion.section>
    </Layout>
  )
}

export default Header;
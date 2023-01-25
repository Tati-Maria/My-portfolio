import React from 'react'
import Layout from '../layout/Layout';
import ExtraNav from './ExtraNav';

const Header = () => {
  return (
    <Layout>
    <nav className='py-4'>
        <ul className='text-end space-x-16 text-lg'>
            <li className='inline-block'>
                <a href="#about">About</a>
            </li>
            <li className='inline-block'>
                <a href="#projects">Projects</a>
            </li>
            <li className='inline-block w-max text-black bg-white py-1 px-6 rounded-lg hover:scale-110 duration-300'>
                <a href="#" download="Maria's Resumé">My Resumé</a>
            </li>
        </ul>
    </nav>
    <section className='flex items-center justify-center flex-col h-full mt-52 space-y-6'>
        <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center'>Hi, I'm Maria</h1>
        <span className='text-xl lg:text-3xl capitalize'>A front-end developer</span>
        <button className='text-lg py-3 px-8 bg-gradient-to-r from-blue-700 to-green-700 rounded-full hover:scale-110 duration-300 shadow-md'
        >
            <a href="mailto:rosatati14@gmail.com">
            Connect with me
            </a>
        </button>
    </section>
    </Layout>
  )
}

export default Header;
import React from 'react'
import Layout from '../layout/Layout'
import ProjectCard from './ProjectCard'
import Title from './Title';
import {AiOutlineArrowRight} from "react-icons/ai";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className='text-white bg-slate-900' id='projects'>
      <Layout>
        <div className='text-center pt-16'>
        <Title title="Projects" />
        </div>
        <section>
          <ProjectCard />
        </section>
        <motion.button 
         whileHover={{scale: 1.1}}
         whileTap={{scale: 0.9}}
        type='button' 
        aria-label='button link' 
        className='flex items-center gap-2 w-max mx-auto my-10 py-3 px-10 rounded-md text-base bg-white text-black'>
          <a href="https://github.com/Tati-Maria" target='_blank'>See More</a>
          <AiOutlineArrowRight />
        </motion.button>
    </Layout>
    </div>
  )
}

export default Projects
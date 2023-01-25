import React from 'react'
import Layout from '../layout/Layout'
import ProjectCard from './ProjectCard'
import Title from './Title';
import {AiOutlineArrowRight} from "react-icons/ai"

const Projects = () => {
  return (
    <div className='text-white bg-slate-800' id='#projects'>
      <Layout>
        <div className='text-center pt-16 pb-5'>
        <Title title="Projects" />
        </div>
        <section>
          <ProjectCard />
        </section>
        <button type='button' aria-label='button link' className='flex items-center gap-2 w-max mx-auto my-10 py-3 px-10 rounded-md text-base bg-white text-black hover:scale-110 duration-300'>
          <a href="https://github.com/Tati-Maria" target='_blank'>See More</a>
          <AiOutlineArrowRight />
        </button>
    </Layout>
    </div>
  )
}

export default Projects
import React from 'react';
import {projects} from "../assets/projects/projects"
import {motion} from "framer-motion"

const ProjectCard = () => {
  return (
    <div className='grid grid-cols-1 gap-16 place-items-center py-10 '>
        {projects.map(project => (
            <motion.div
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}} 
            transition={{duration: 1, ease: [0.25, 0.1, 0.25, 1]}}
            viewport={{once: true}}
            key={project.id} 
            className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <img src={project.image} alt={project.name} className="md:w-1/2 lg:w-full" />
                <div className='text-center space-y-5 lg:text-start lg:space-y-3'>
                  <h3 className='font-semibold text-2xl'>{project.name}</h3>
                  <p className='text-base'>{project.about}</p>
                  <span className='block text-blue-400 w-max mx-auto py-2 rounded-full lg:mx-0'>{project.tech}</span>
                  <div className='flex items-center gap-10 justify-center lg:justify-start'>
                  <a href={project.link} target="_blank" className='block underline shadow-sm'>See Live</a>
                  <a href={project.git} target="_blank" className='block underline shadow-sm'>Source Code</a>
                  </div>
                </div>
            </motion.div>
        ))}
    </div>
  )
}

export default ProjectCard;
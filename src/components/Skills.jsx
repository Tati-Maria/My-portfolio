import React from 'react'
import Layout from "../layout/Layout";
import Title from "../components/Title";
import {skills} from "../assets/projects/skills"

const Skills = () => {
  return (
    <div className='bg-slate-900'>
    <Layout>
    <section className='pt-10 pb-20'>
      <div className='text-center pt-10 py-20'>
      <Title title="Skills & Technologies" />
      </div>
      <div className='grid grid-cols-3 place-items-center gap-5 md:gap-10 lg:gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {skills.map(skill => (
          <div key={skill.id} className="flex flex-col gap-5 items-center hover:scale-110 duration-300 p-2">
            <img src={skill.img} alt={skill.name} className="w-16" />
            <h5 className='font-medium text-base md:text-lg lg:text-xl'>{skill.name}</h5>
          </div>
        ))}
      </div>
    </section>
    </Layout>
    </div>
  )
}

export default Skills
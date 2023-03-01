import React, {useState} from 'react'
import Layout from "../layout/Layout";
import Title from "../components/Title";
import {skills} from "../assets/projects/skills";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"

const Skills = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(skills.length / itemsPerPage);
  
  const handlePageChange = (page) => {
    if(page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }

    return;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSkills = skills.slice(startIndex , startIndex + itemsPerPage);


  return (
    <div className='bg-slate-900'>
    <Layout>
    <section className='pt-10 pb-20'>
      <div className='text-center pt-10 py-20'>
      <Title title="Skills & Technologies" />
      </div>
      <div className='grid grid-cols-2 place-items-center gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-10 lg:gap-16'>
        {paginatedSkills.map(skill => (
          <div key={skill.id} className="flex flex-col gap-5 items-center hover:scale-110 duration-300 p-2">
            <img src={skill.img} alt={skill.name} className="w-16" />
            <h4 className='font-medium text-base md:text-lg lg:text-xl'>{skill.name}</h4>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center gap-10 pt-10'>
        <button title='previous' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="disabled:text-gray-700">
          <BsFillArrowLeftCircleFill size={30} />
        </button>
        <button title='next' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="disabled:text-gray-700">
          <BsFillArrowRightCircleFill size={30} />
        </button>
      </div>
    </section>
    </Layout>
    </div>
  )
}

export default Skills
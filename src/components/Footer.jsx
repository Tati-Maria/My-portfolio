import React from 'react';
import Layout from "../layout/Layout"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {SiGmail} from "react-icons/si";
import ScrollButton from './ScrollButton';


const Footer = () => {
  return (
   <Layout>
     <section className='pt-10 py-5 relative'>
      <div className='space-y-2 flex flex-col items-center'>
        <ul className='flex items-center gap-6'>
          <li className='text-center'>
            <a href="https://github.com/Tati-Maria" target="_blank" title='Github profile'>
              <BsGithub className='text-white' size={20} />
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/maria-tati/" target="_blank" title='LinkedIn profile' >
              <BsLinkedin className='text-blue-600' size={20}/>
            </a>
            </li>
            <li>
            <a href="mailto:rosatati14@gmail.com" target="_blank" title='my email'>
              <SiGmail color='red' size={20} />
            </a>
          </li>
        </ul>
        <span className='underline'>rosatati14@gmail.com</span>
        <p className='text-center'>
          Icons from <a className='text-blue-200 underline' href="https://worldvectorlogo.com/">World Vector Logo</a>
        </p>
        <div className='text-center'>
          <p className='underline'>Made by Maria {new Date().getFullYear()} &copy;</p>
        </div>
      </div>
        <div className='absolute right-0 top-0'>
          <ScrollButton />
      </div>
    </section>
   </Layout>
  )
}

export default Footer;
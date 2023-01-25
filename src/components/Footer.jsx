import React from 'react';
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {SiGmail} from "react-icons/si"

const Footer = () => {
  return (
    <section className='pt-10 py-5'>
      <div className='space-y-2 flex flex-col items-center'>
        <ul className='flex items-center gap-6'>
          <li className='text-center'>
            <a href="https://github.com/Tati-Maria" target="_blank">
              <BsGithub className='text-gray-900' size={20} />
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/maria-tati/" target="_blank">
              <BsLinkedin className='text-blue-600' size={20}/>
            </a>
            </li>
            <li>
            <a href="mailto:rosatati14@gmail.com" target="_blank">
              <SiGmail color='red' size={20} />
            </a>
          </li>
        </ul>
        <span className='underline'>rosatati14@gmail.com</span>
        <p className='text-center'>
          Icons from <a className='text-blue-700 underline' href="https://worldvectorlogo.com/">World Vector Logo</a>
        </p>
        <div className='text-center'>
          <p className='underline'>Made by Maria {new Date().getFullYear()} &copy;</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;
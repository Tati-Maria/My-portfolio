import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {FaTimes} from "react-icons/fa"
import {RxHamburgerMenu} from "react-icons/rx"

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {opacity: 0, y: 20, transition: {durantion: 0.2}}
};

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

  return (
   <motion.nav
    className={`${isOpen ? "fixed top-0 left-0 w-full h-full bg-gray-900 z-50" : ""}`}
   initial={false}
    animate={isOpen ? "open" : "closed"}
   >
    <motion.button
    className='fixed top-5 right-5 z-50 bg-gray-900 p-2 rounded-md text-white'
    whileTap={{ scale: 0.97 }}
    onClick={handleToggle}
    >
        <RxHamburgerMenu size={30} />
    </motion.button>
    <motion.ul
    className='fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center text-2xl md:text-4xl lg:text-6xl text-white space-y-10 lg:space-y-20'
    variants={{
        open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
        },
        closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
            }
        }
    }}
    style={{pointerEvents: isOpen ? "auto" : "none"}}
    >
        <motion.li
        variants={itemVariants}>
            <a
            className='hover:text-gray-900 hover:bg-white rounded-md p-2 duration-300 ease-in-out'
            onClick={handleToggle} 
            href="#about">About</a>
        </motion.li>
        <motion.li
        variants={itemVariants}>
            <a
            className='hover:text-gray-900 hover:bg-white rounded-md p-2 duration-300 ease-in-out'
            onClick={handleToggle} 
            href="#projects">Projects</a>
        </motion.li>
        <motion.li variants={itemVariants}>
            <a
            onClick={handleToggle}
            className='hover:text-gray-900 hover:bg-white rounded-md p-2 duration-300 ease-in-out' 
            href="#skills">Skills</a>
        </motion.li>
    </motion.ul>
   </motion.nav>
  )
}

export default Navigation
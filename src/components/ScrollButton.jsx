import React, {useState} from 'react';
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import {motion} from "framer-motion"

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    //toggles the visibility of the button after scrolling 300px away from the top
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300) {
            setVisible(true);
        } else if(scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible);

  return (
    <motion.button
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.9}}
    onClick={scrollToTop}
    className={`${visible ? 'inline' : 'hidden'}`}
    >
        <BsFillArrowUpCircleFill 
        size={40}
         />
    </motion.button>
  )
}

export default ScrollButton;
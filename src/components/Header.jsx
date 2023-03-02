
import Layout from '../layout/Layout';
import {motion} from "framer-motion"
import Navigation from './Navigation';


const Header = () => {
    

  return (
    <>
    <Navigation />
    <Layout>
    <motion.section
    animate={{opacity: 1, scale: 1}}
    transition={{
        duration: 1,
        ease: [0.5, 0.71, 1, 1.5]
    }} 
    initial={{
        opacity: 0,
        scale: 0.5
    }}
    className='flex items-center justify-center flex-col h-full mt-52 space-y-6'>
        <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center'>Hi, I'm <span className='font-space text-orange-500'>Maria</span></h1>
        <span className='text-xl lg:text-3xl capitalize'>A front-end developer</span>
        <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className='text-lg py-3 px-8 bg-orange-600 shadow-lg shadow-black  rounded-lg hover:bg-orange-500'
        >
            <a href="mailto:rosatati14@gmail.com" title='Connect with me' role='button'>
            Connect with me
            </a>
        </motion.button>
    </motion.section>
    </Layout>
    </>
  )
}

export default Header;
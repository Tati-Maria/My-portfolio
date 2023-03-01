import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <button onClick={handleToggle} className="text-4xl m-10 ">
       <FontAwesomeIcon icon={faBars} />
    </button>
    <nav className={`${isOpen ? 'isactive' : ''} fixed`}>
       <aside>
        <div className={`hidden md:block aside-section aside-left ${isOpen ? 'isactive' : ''}`} >
            <div className="aside-content space-y-3">
                <h2 className='text-7xl'>Maria.</h2>
                <p className='capitalize text-xl'>Front-end developer</p>
                {/*Socials */}
            </div>
        </div>
        <div className={`w-full md:w-[60%] aside-section aside-right ${isOpen ? 'isactive' : ''}`}>
            <button onClick={handleToggle} className="text-4xl absolute right-4 top-4">
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="aside-list">
                <li>
                    <a href="#home" className='text-lg' onClick={handleToggle}>Home</a>
                </li>
                <li>
                    <a href="#about" className='text-lg'>About Me</a>
                </li>
                <li>
                    <a href="#projects" className='text-lg'>Projects</a>
                </li>
                <li>
                    <a href="#skills" className='text-lg'>Skills</a>
                </li>
            </ul>
        </div>
       </aside>
    </nav>
    </>
  )
}

export default Navigation
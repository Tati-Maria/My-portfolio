
const ExtraNav = () => {
  return (
       <div className="w-full h-40 absolute bg-white z-10 text-gray-800 rounded duration-300">
        <ul className="flex flex-col items-center justify-evenly h-full py-2">
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
        </ul>
       </div>
  )
}

export default ExtraNav;
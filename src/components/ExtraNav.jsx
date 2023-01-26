
const ExtraNav = () => {
  return (
       <div className="w-full h-40 absolute bg-white z-10 text-gray-800 rounded duration-300">
        <ul className="flex flex-col items-center justify-between h-full py-4">
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li className="inline-block w-max text-black border-2 border-blue-600 py-1 px-6 rounded-lg">
                <a href="#" download="Maria's_Resume">My Resumé</a>
            </li>
        </ul>
       </div>
  )
}

export default ExtraNav;
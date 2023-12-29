import { FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-zinc-900"
          >
            <li>
              <a className="text-lg hover:text-sky-600" href="#work">
                Work
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-sky-600" href="#tech">
                Tech
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center px-2">
          <a className="btn btn-ghost text-xl md:text-4xl font-Teko py-1.5">
            TWOSEVEN
          </a>
        </div>
      </div>
      {/* -------------------------------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4">
          <li>
            <a href="#work">
              <button className="btn btn-ghost">Work</button>
            </a>
          </li>
          <li>
            <a href="#tech">
              <button className="btn btn-ghost">Tech</button>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end px-4 gap-6">
        <a href="https://github.com/ehee27" target="_blank" rel="noreferrer">
          <IoLogoGithub className="text-3xl hover:scale-110 transition-all" />
        </a>
        <a
          href="https://www.linkedin.com/in/sjlucas/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-3xl hover:scale-110 transition-all" />
        </a>
      </div>
    </div>
  )
}

export default Navbar

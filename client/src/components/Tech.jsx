import jsLogo from '/assets/js.png'
import reactLogo from '/assets/react.png'
import nodeLogo from '/assets/node.png'
import { SiRedux } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaDatabase } from 'react-icons/fa'

const logos = [{ logo: jsLogo }, { logo: reactLogo }, { logo: nodeLogo }]

const Tech = () => {
  return (
    <div className="px-5 py-10 md:py-20 md:px-10 mt-3 text-white" id="tech">
      <p className="text-2xl font-Teko">TECH</p>
      <p className="text-xl my-10">
        I'm a proficient Javascript developer with a passion for creating unique
        applications and solving problems. I studied Fullstack development
        through Fullstack Academy. These are a few of the technologies I like to
        work with.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5">
        {logos.map((item, i) => {
          return (
            <div className="flex justify-center items-center" key={i}>
              <img
                className="h-[200px] w-[200px] rounded-full animate-pulse"
                src={item.logo}
                alt="logo"
              ></img>
            </div>
          )
        })}
      </div>
      <div className="flex gap-8 md:gap-28 justify-center items-center my-5">
        <SiExpress className="text-5xl md:text-7xl text-white" />
        <SiRedux className="text-5xl md:text-7xl text-white" />
        <TbBrandNextjs className="text-5xl md:text-7xl text-white" />
        <SiTailwindcss className="text-5xl md:text-7xl text-white" />
        <FaDatabase className="text-5xl md:text-7xl text-white" />
      </div>
    </div>
  )
}

export default Tech

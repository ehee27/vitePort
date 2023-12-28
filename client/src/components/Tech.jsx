import jsLogo from '../assets/js.png'
import reactLogo from '../assets/react.png'
import nodeLogo from '../assets/node.png'

const logos = [{ logo: jsLogo }, { logo: reactLogo }, { logo: nodeLogo }]

const Tech = () => {
  return (
    <div className=" mt-10" id="tech">
      <p className="text-2xl font-Teko">
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
                className="h-[200px] w-[200px] rounded-full"
                src={item.logo}
                alt="logo"
              ></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tech

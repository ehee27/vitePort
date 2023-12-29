import React from 'react'

const AnimatedCard = ({ project }) => {
  return (
    <div className="da relative flex flex-col justify-center overflow-hidden mt-3">
      <div className="relative">
        <div className="group relative m-0 flex justify-center h-96 w-96 rounded-xl shadow-xl sm:mx-auto sm:max-w-lg">
          <div className="transition duration-300 ease-in-out z-10 h-full w-full overflow-hidden rounded-xl opacity-50 group-hover:opacity-90 mx-2">
            <img src={project.image} />
          </div>

          <div className="flex flex-col justify-center items-center absolute bottom-0 z-20 py-3 group-hover:scale-110 group-hover:cursor-pointer bg-black bg-opacity-70 hover:bg-opacity-90 w-[100%] h-[50%] transition duration-200 ease-in-out px-4 pb-10">
            <h1 className="text-2xl font-Teko font-bold text-white mt-3 pt-15">
              {project.title}
            </h1>
            <p className="text-md text-gray-200 shadow-xl mb-3">
              {project.about}
            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
              <button className="h-[35px] w-[200px] bg-sky-600 hover:bg-sky-400 border-none text-white rounded-md transition-all">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedCard

const PortfolioCard = ({ project }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg m-1 bg-black shadow-md shadow-primary">
      <figure className="">
        <img
          className="h-[300px] w-[400px] md:h-[220px] md:w-[330px] lg:h-[200px] lg:w-[350px] rounded-lg mt-4"
          src={project.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="text-left">{project.about}</p>
        <div className="card-actions justify-start">
          <a rel="noreferrer" href={project.link} target="_blank">
            <button className="btn bg-secondary text-white">
              Click to View
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard

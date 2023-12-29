import NamePLate from './NamePLate'

const Banner = () => {
  return (
    <div className="px-5 py-10 md:py-20 md:px-10 flex flex-col justify-center items-center text-white">
      <p className="text-5xl md:text-7xl font-Teko py-3">Scott Lucas</p>
      <NamePLate className="" />

      <div className="text-xl my-10">
        <p>
          I’m passionate about tech, the environment, fitness and art. I’ve been
          instrumental in building a web design agency from the ground up but
          I’m seeking a new challenge.
        </p>
        <br></br>
        <p>
          I’ve had diverse life experience as a former professional baseball
          player, a group fitness coach and a commercial actor. I’m a full
          circle communicator, team-oriented energy giver and a creative problem
          solver. I’m eager to take the next step in my software development
          career utilizing my previous work experience, leadership and teamwork
          abilities.
        </p>
        {/* <BackgroundAnimation className="border-2" /> */}
      </div>
    </div>
  )
}

export default Banner

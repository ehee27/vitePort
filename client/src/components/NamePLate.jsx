const NamePLate = () => {
  return (
    <div className="grid gap-8 items-start justify-center my-5 text-white">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-sky-600 rounded-lg blur"></div>
        <button className="relative bg-black flex items-center gap-3 rounded-lg px-7 py-4 leading-none divide-x divide-white">
          <span className="text-md md:text-xl flex items-center gap-2 text-gray-100 pr-3 text-xl">
            Full-Stack Software Engineer
          </span>
          <span className="text-md pl-6 md:text-xl font-bold text-sky-500">
            JS, React, Node
          </span>
        </button>
      </div>
    </div>
  )
}

export default NamePLate

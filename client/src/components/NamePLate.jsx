const NamePLate = () => {
  return (
    <div className="grid gap-8 items-start justify-center my-5">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-green-900 rounded-lg blur"></div>
        <button className="relative bg-black flex items-center gap-3 rounded-lg px-7 py-4 leading-none divide-x divide-white">
          <span className="flex items-center gap-2 text-gray-100 pr-3 text-xl">
            Full-Stack Software Engineer
          </span>
          <span className="text-primary pl-6 text-xl">JS, React, Node</span>
        </button>
      </div>
    </div>
  )
}

export default NamePLate

function Navbar() {

    return (
      <>
        <nav className="bg-white h-20 flex items-center justify-between px-20 py-3 shadow-lg sticky top-0">
            <h1 className="text-xl font-bold">AgroEduConnect</h1>
            <div className="flex gap-8">
                <a className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 hover:text-white" href="#">Home</a>
                <a className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 hover:text-white" href="#">Live Session</a>
                <a className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 hover:text-white" href="#">Articles</a>
                <a className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 hover:text-white" href="#">Community</a>
            </div>
            <div className="flex gap-8">
                <a href="#"><button className="bg-green-600 px-3.5 py-1.5 text-white rounded-md font-semibold hover:bg-green-700">Login</button></a>
                <a href="#"><button className="bg-green-600 px-3.5 py-1.5 text-white rounded-md font-semibold hover:bg-green-700">Signup</button></a>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
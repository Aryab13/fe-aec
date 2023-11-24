import {  useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

    return (
      <>
        <nav className="bg-white h-20 flex items-center justify-between px-20 py-3 shadow-lg sticky top-0 z-50">
            <h1 className="text-xl font-bold">AgroEduConnect</h1>
            <div className="flex gap-8">
                <a className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer" onClick={() => {navigate('/');window.scrollTo(0, 0);}}>Home</a>
                <a className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer" onClick={() => {navigate('/ls');window.scrollTo(0, 0);}}>Live Session</a>
                <a className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer">Articles</a>
                <a className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer">Community</a>
            </div>
            <div className="flex gap-8">
                <a><button className="bg-green-600 px-3.5 py-1.5 text-white rounded-md font-semibold hover:bg-green-700" onClick={() => {navigate('/login');window.scrollTo(0, 0);}}>Login</button></a>
                <a><button className="bg-green-600 px-3.5 py-1.5 text-white rounded-md font-semibold hover:bg-green-700" onClick={() => {navigate('/register');window.scrollTo(0, 0);}}>Signup</button></a>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
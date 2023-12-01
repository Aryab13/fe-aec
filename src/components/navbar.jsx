import {  useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar() {

  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("usr"));

    if (storedUser && storedUser.name) {
      setLoggedIn(true);
      setUsername(storedUser.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usr");
    setLoggedIn(false);
    setUsername("");
    navigate("/");
  };

    return (
      <>
        <nav className="bg-white h-20 flex items-center justify-between px-20 py-3 shadow-lg sticky top-0 z-50">
            <h1 className="text-xl font-bold">AgroEduConnect</h1>
            <div className="flex gap-8">
                <a className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer" onClick={() => {navigate('/');window.scrollTo(0, 0);}}>Home</a>
                <a className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer" onClick={() => {navigate('/ls');window.scrollTo(0, 0);}}>Live Session</a>
                <a className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer" onClick={() => {navigate('/article');window.scrollTo(0, 0);}}>Articles</a>
                <a className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer" onClick={() => {navigate('/community');window.scrollTo(0, 0);}}>Community</a>
            </div>
            <div className="flex gap-8 items-center">
            {isLoggedIn ? (
            <>
              <h5 className="text-lg font-bold">Hello, {username}</h5>
              <button
                className="bg-white px-3.5 py-1.5 outline outline-2 outline-green-600 rounded-md font-semibold hover:bg-green-700 hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                onClick={() => {
                  navigate("/login");
                  window.scrollTo(0, 0);
                }}
              >
                <button className="bg-green-600 px-3.5 py-1.5 text-white rounded-md font-semibold hover:bg-green-700">
                  Login
                </button>
              </a>
              <a
                onClick={() => {
                  navigate("/register");
                  window.scrollTo(0, 0);
                }}
              >
                <button className="bg-green-600 px-3.5 py-1.5 text-white rounded-md font-semibold hover:bg-green-700">
                  Signup
                </button>
              </a>
            </>
          )}
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
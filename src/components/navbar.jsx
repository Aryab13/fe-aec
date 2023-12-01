import {  useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar() {

  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);

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
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-lg sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-xl font-bold">AgroEduConnect</h1>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-6">
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
          <div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                <a
                  className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                  }}
                >
                Home
                </a>
                </li>
                <li>
                <a
                  className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer"
                  onClick={() => {
                    navigate("/ls");
                    window.scrollTo(0, 0);
                  }}
                > 
                Live Session
                </a>
                </li>
                <li>
                <a
                  className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer"
                  onClick={() => {
                    navigate("/article");
                    window.scrollTo(0, 0);
                  }}
                >
                Articles
                </a>
                </li>
                <li>
                <a
                  className="transition font-bold ease-in-out delay-100 hover:text-green-600 cursor-pointer"
                  onClick={() => {
                    navigate("/community");
                    window.scrollTo(0, 0);
                  }}
                >
                Community
                </a>
                </li>
            </ul>
          </div>
        </div>

      </nav>
    </>
    )
  }
  
  export default Navbar
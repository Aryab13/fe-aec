import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {useNavigate, useLocation} from 'react-router-dom'
import {useState, useEffect} from "react";

function DetailLs() {

    const navigate = useNavigate();
    const location = useLocation();
    const {state} = location
    const {id, name, imgUrl, description, prof, date, hour} = state;

    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("usr"));

        if (storedUser && storedUser.name) {
        setLoggedIn(true);
        }
    }, []);

    const handleSubmit = (e) => {
        alert("Enroll Successful, Invitation will be sent to your email");
    };

  return (
    <>
    <Navbar/>
    <div className="p-10">
        <h1 className="text-4xl font-bold my-5 text-center">{name}</h1>
        <p className="text-xl text-gray-500 my-5 px-40 text-center">{description}</p>
        <div className="mx-40 my-20 flex justify-around items-center">
            <div>
                <h5 className="text-2xl mb-3">{prof}</h5>
                <p className="mb-0 text-gray-500">{date}</p>
                <p className="mb-10 text-gray-500">{hour}</p>
                <div className="flex flex-col gap-4">
                {isLoggedIn ? (
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 px-3.5 py-1.5 text-white rounded-md hover:bg-green-700"
                >
                  Enroll Live Session
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    window.scrollTo(0, 0);
                  }}
                  className="bg-green-600 px-3.5 py-1.5 text-white rounded-md hover:bg-green-700"
                >
                  Login to Enroll
                </button>
              )}
                <button onClick={() => {navigate('/ls');window.scrollTo(0, 0);}} className="bg-white px-3.5 py-1.5 outline outline-2 outline-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white">Back</button>
                </div>
            </div>
            <div>
                <img src={imgUrl} alt=""/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default DetailLs
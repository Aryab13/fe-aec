import {useState, useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer"
import Navbar from "../components/navbar"

function LiveSession() {

    const navigate = useNavigate();
    const [data, setData] = useState();

    const getData = () => {
        axios.get('https://65262cd567cfb1e59ce7f637.mockapi.io/live-session')
        .then((response) => {
            setData(response?.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getData()
      }, [])

  return (
    <>
    <Navbar/>
    <div className="p-5 md:p-10 items-center justify-center">
        <h1 className="text-4xl font-bold my-5 text-center">Live Session</h1>
        <p className="text-xl text-gray-500 my-5 px-4 md:px-40 text-center">A session in which the performance are broadcast or recorded in real time about farming</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                data && data.map((item,index) => (
                    <div>
                        <div className="h-[450px] border relative border-gray-200 rounded-lg shadow shadow-xl" key={index}>   
                            <img src={item.imgUrl} alt="" className="w-full h-40 object-cover"/>   
                            <h5 className="mb-2 py-4 mx-4 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-800">{item.name}</h5>
                            <p className="mb-3 mx-4 font-normal text-gray-500">{item.description.slice(0,item.description.indexOf(".") + 1)}</p>
                            <button 
                            onClick={() => navigate(`/detaills/${item?.id}`, {
                                state: {
                                  id: item.id,
                                  name: item.name,
                                  imgUrl: item.imgUrl,
                                  description: item.description,
                                  prof: item.prof,
                                  date: item.date,
                                  hour: item.hour
                                }
                              })}
                            className="w-32 absolute bottom-3 right-3 bg-green-600 px-3.5 py-1.5 text-white rounded-md font-semibold hover:bg-green-700">Detail</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default LiveSession
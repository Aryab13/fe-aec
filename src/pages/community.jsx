import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {useState, useEffect} from "react";
import axios from "axios";


function Community() {

    const [data, setData] = useState();

    const getData = () => {
        axios.get('https://652ff3566c756603295dfc8e.mockapi.io/community')
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
        {
            data && data.map((item,index) => (
                <div className="block m-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">{item.title}</h1>
                    <p className="font-normal text-gray-500">{item.content}</p>
                </div>
            ))
        }
     <Footer/>
    </>
  )
}

export default Community
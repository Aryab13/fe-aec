import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {useState, useEffect} from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function Article() {

    const [data, setData] = useState();
    const navigate = useNavigate();

    const getData = () => {
        axios.get('https://6568afca9927836bd97541bc.mockapi.io/article')
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
        <div className="grid grid-cols-2 m-8">
        {
            data && data.map((item,index) => (
                <div>
                    <a 
                    onClick={() => navigate(`/detailarticle/${item?.id}`, {
                        state: {
                          id: item.id,
                          title: item.title,
                          img: item.img,
                          p1: item.p1,
                          p2: item.p2,
                          p3: item.p3,
                          p4: item.p4,
                          p5: item.p5
                        }
                      })}                    
                    className="cursor-pointer m-8 p-6 grid grid-cols-2 gap-6 items-center bg-white border border-gray-200 rounded-lg shadow xl:flex-row md:max-w-xl hover:bg-gray-100">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded" src={item.img} alt="" />
                        <div>
                            <h1 className="mb-2 text-2xl font-bold tracking-tight">{item.title}</h1>
                            <p className="mb-3 font-normal text-gray-500">{item.p1.slice(0,item.p1.indexOf(".") + 1)}</p>
                        </div>
                    </a>
                </div>
            ))
        }
        </div>
        <Footer/>
    </>
  )
}

export default Article
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {useNavigate, useLocation} from 'react-router-dom'

function DetailLs() {

    const navigate = useNavigate();
    const location = useLocation();
    const {state} = location
    const {id, name, imgUrl, description, prof, date, hour} = state;

  return (
    <>
    <Navbar/>
    <div className="p-10">
        <h1 className="text-4xl font-bold my-5 text-center">{name}</h1>
        <p className="text-xl text-gray-500 my-5 px-40 text-center">{description}</p>
        <div>
            <h5>{prof}</h5>
            <p>{date}</p>
            <p>{hour}</p>
            <button>Enroll</button>
            <button>Back</button>
        </div>
        <div>
            <img src={imgUrl} alt=""/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default DetailLs
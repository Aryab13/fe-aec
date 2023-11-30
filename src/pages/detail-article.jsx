import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {useLocation} from 'react-router-dom'

function DetailArticle() {

    const location = useLocation();
    const {state} = location
    const {id, title, img, p1, p2, p3, p4, p5} = state;

  return (
    <>
        <Navbar/>
            <div>
                <h1 className="text-4xl font-bold m-8 text-center">{title}</h1>
                <img className="mx-auto block h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800" src={img} alt="" />
                <p className="m-5 text-gray-500 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-500">{p1}</p>
                <p className="m-5 text-gray-500">{p2}</p>
                <p className="m-5 text-gray-500">{p3}</p>
                <p className="m-5 text-gray-500">{p4}</p>
                <p className="m-5 text-gray-500">{p5}</p>
            </div>
        <Footer/>
    </>
  )
}

export default DetailArticle
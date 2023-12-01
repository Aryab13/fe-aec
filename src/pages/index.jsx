import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ImgHero from '../assets/hero.jpg'
import ImgDesc from '../assets/desc.jpg'
import ImgDesc2 from '../assets/desc2.jpg'
import ImgCard1 from '../assets/card1.jpg'
import ImgCard2 from '../assets/card2.jpg'
import ImgCard3 from '../assets/card3.jpg'

function Index(){
    return(
        <>
        <Navbar/>
        <div className='flex flex-col md:flex-row py-10 pt-32'>
            <div className="md:w-2/4 flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl w-80 font-bold my-5">Stay Curious</h1>
                <p className="text-xl md:text-3xl text-gray-500 my-5 md:pl-44 md:pr-8">
                    Discover stories, thinking, and exterprise from writers about
                    farming
                </p>
            </div>
            <img src={ImgHero} alt="" className='w-full md:w-2/4 h-80 md:self-end px-8 md:drop-shadow-2xl'/>
        </div>

        <div className='my-10 px-6 md:px-28 flex flex-col md:flex-row'>
            <div className='w-full md:w-7/12 flex justify-center items-center flex-col shadow-xl border-solid border-2'>
                <h2 className='font-bold text-xl md:text-2xl'>Platform Edukasi Interaktif</h2>
                <p className='text-gray-500 m-4 md:px-12'>
                    Platform ini menyediakan sumber daya edukasi dalam bentuk video,
                    tutorial interaktif, dan artikel tentang peran serangga penyerbuk
                    dan mikroba tanah dalam ekosistem pertanian. Ini juga menyertakan
                    panduan praktis tentang bagaimana menjaga dan meningkatkan kehadiran
                    serangga penyerbuk dan mikroba tanah.
                </p>
            </div>
            <img src={ImgDesc} alt="" className="w-full md:w-5/12 mt-6 md:mt-0"/>
        </div>

        <div className='my-10 px-6 md:px-28 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='h-full shadow-lg hover:shadow-2xl border-solid border-1'>
                <img src={ImgCard1} alt="" className='object-fill h-60 w-full'/>
                <div className='p-5'>
                    <h3 className='text-xl font-bold ml-4 py-4'>Identifikasi Serangga Penyerbuk</h3>
                    <p className='text-gray-500 text-base py-2'>
                        memberikan informasi tentang peran dan manfaat mereka dalam ekosistem pertanian.
                    </p>
                </div>
            </div>
            <div className='h-full shadow-lg hover:shadow-2xl border-solid border-1'>
                <img src={ImgCard2} alt="" className='object-fill h-60 w-full'/>
                <div className='p-5'>
                    <h3 className='text-xl font-bold ml-4 py-4'>Panduan Pemilihan Makanan Sehat</h3>
                    <p className='text-gray-500 text-base py-2'>
                    bagaimana memilih makanan yang lebih sehat dan mengurangi paparan polutan.
                    </p>
                </div>
            </div>
            <div className='h-full shadow-lg hover:shadow-2xl border-solid border-1'>
                <img src={ImgCard3} alt="" className='object-fill h-60 w-full'/>
                <div className='p-5'>
                    <h3 className='text-xl font-bold ml-4 py-4'>Pemantauan Kesehatan Tanaman</h3>
                    <p className='text-gray-500 text-base py-2'>
                    mengidentifikasi masalah kesehatan seperti penyakit, hama, atau kekurangan nutrisi.
                    </p>
                </div>
            </div>
        </div>

        <div className='h-full flex my-10 mx-6 md:mx-40 justify-center md:justify-between border-double border-4 rounded-lg shadow-xl flex-col md:flex-row'>
            <div className='flex justify-center items-center flex-col w-full md:w-6/12 px-6 md:pl-10'>
                <h1 className='text-4xl md:text-6xl ml-4 py-4'>About Us</h1>
                <p className='text-gray-500 text-base py-2 ml-6 md:ml-10'>
                    "AgroEduConnect" menggambarkan platform sebagai sumber daya edukasi
                    yang menghubungkan komponen-komponen penting dalam pertanian untuk
                    menciptakan pemahaman yang lebih baik dan praktik yang lebih
                    berkelanjutan dalam ekosistem pertanian.
                </p>
            </div>
            <img src={ImgDesc2} alt="" className='w-full md:w-80 mt-6 md:mt-0'/>
        </div>
        <Footer/>
        </>
    )
}

export default Index
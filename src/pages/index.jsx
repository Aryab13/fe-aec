import ImgHero from '../assets/hero.jpg'
import ImgDesc from '../assets/desc.jpg'
import ImgDesc2 from '../assets/desc2.jpg'
import ImgCard1 from '../assets/card1.jpg'
import ImgCard2 from '../assets/card2.jpg'
import ImgCard3 from '../assets/card3.jpg'

function Index(){
    return(
        <>
        <div className='flex py-10'>
            <div className="pt-10 w-2/4 flex flex-col items-center justify-center">
                <h1 className="text-6xl w-80 font-bold my-5">Stay Curious</h1>
                <p className="text-3xl text-gray-500 my-5 pl-44 pr-8">
                    Discover stories, thinking, and exterprise from writers about
                    farming
                </p>
            </div>
            <img src={ImgHero} alt="" className='w-2/4 h-80 self-end pr-40 drop-shadow-2xl'/>
        </div>

        <div className='h-72 my-10 px-28 flex'>
            <div className='w-7/12 flex justify-center items-center flex-col shadow-xl border-solid border-2'>
                <h2 className='font-bold text-2xl'>Platform Edukasi Interaktif</h2>
                <p className='text-gray-500 m-6 px-12'>
                    Platform ini menyediakan sumber daya edukasi dalam bentuk video,
                    tutorial interaktif, dan artikel tentang peran serangga penyerbuk
                    dan mikroba tanah dalam ekosistem pertanian. Ini juga menyertakan
                    panduan praktis tentang bagaimana menjaga dan meningkatkan kehadiran
                    serangga penyerbuk dan mikroba tanah.
                </p>
            </div>
            <img src={ImgDesc} alt=""/>
        </div>

        <div className='my-10 px-28 py-10 grid grid-cols-3 gap-8'>
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

        <div className='h-96 flex my-10 mx-40 justify-between border-double border-4 rounded-lg shadow-xl'>
            <div className='flex justify-center items-center flex-col w-6/12 pl-10'>
                <h1 className='text-6xl ml-4 py-4'>About Us</h1>
                <p className='text-gray-500 text-base py-2'>
                    "AgroEduConnect" menggambarkan platform sebagai sumber daya edukasi
                    yang menghubungkan komponen-komponen penting dalam pertanian untuk
                    menciptakan pemahaman yang lebih baik dan praktik yang lebih
                    berkelanjutan dalam ekosistem pertanian.
                </p>
            </div>
            <img src={ImgDesc2} alt="" className='w-80'/>
        </div>
        </>
    )
}

export default Index
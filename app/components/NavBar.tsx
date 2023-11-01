import Image from 'next/image';
import { BiMenu, BiSolidPhotoAlbum } from 'react-icons/bi';
import { BsChatLeftDots, BsFillArrowThroughHeartFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiOutlineQuestion } from 'react-icons/ai';
import { FaGift, FaPercent } from 'react-icons/fa';
import { GrHistory } from 'react-icons/gr';
import logo from '../img/logo300x200.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NavBar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return(
        <nav className='flex flex-row justify-between border-b border-blue-500'>
            <div className='flex items-center justify-center p-3 m-4 h-full rounded-3xl cursor-pointer hover:bg-blue-500' onClick={toggleMenu}>
               <BiMenu size={30} />
            </div>
            <div className='mx-2'>
                    <Image src={logo} alt='Cuadros Pro' width={150} height={75} />
            </div>
            <div className='flex items-center justify-center p-3 m-4 h-full rounded-3xl cursor-pointer hover:bg-blue-500'>
                <BsChatLeftDots size={30} />
            </div>

            {isMenuOpen && (
            <div className="absolute top-0 left-0 h-full w-3/4 z-50 bg-white p-4 rounded shadow">
                <div className='flex flex-row justify-around items-center mb-4 border-b'>
                    <Image src={logo} alt='CuadroPro' width={200} height={100} />
                    <div className='cursor-pointer m-4 rounded-lg hover:bg-blue-500' onClick={toggleMenu}>
                        <AiFillCloseCircle size={30} />
                    </div>
                </div>
                <div className='p-2 border-b'>
                    <h1 className='text-sm'>Registrate para dar seguimiento a tus ordenes y mucho más</h1>
                    <button className='bg-blue-500 p-2 m-2 rounded-lg text-white font-bold hover:bg-pink-600'>
                        Ingresa o Registrate
                    </button>
                </div>
                <ul className='border-b'>
                  <li>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500'>
                        <div className='m-2'><BiSolidPhotoAlbum size={20} /></div>
                        <h1>Enmarca tus fotos</h1>
                    </div>
                  </li>
                  <li>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500'>
                        <div className='m-2'><BsFillArrowThroughHeartFill size={20} /></div>
                        <h1>Mira nuestra colección de arte</h1>
                    </div>
                  </li>
                  <li>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500'>
                        <div className='m-2'><FaGift size={20} /></div>
                        <h1>GiftCards para regalos</h1>
                    </div>
                  </li>
                </ul>
                <ul className='border-b'>
                  <li>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500'>
                        <div className='m-2'><FaPercent size={20} /></div>
                        <h1>Código Promocional</h1>
                    </div>
                  </li>
                  <li>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500'>
                        <div className='m-2'><GrHistory size={20} /></div>
                        <h1>Mis Ordenes</h1>
                    </div>
                  </li>
                  <li>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500'>
                        <div className='m-2'><AiOutlineQuestion size={20} /></div>
                        <h1>FAQS</h1>
                    </div>
                  </li>
                </ul>
            </div>
            )}
        </nav>
    )
}
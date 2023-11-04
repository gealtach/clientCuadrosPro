'use client'
import Image from 'next/image';
import { BiMenu, BiSolidPhotoAlbum } from 'react-icons/bi';
import { BsChatLeftDots, BsFillArrowThroughHeartFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiOutlineQuestion } from 'react-icons/ai';
import { FaGift, FaPercent } from 'react-icons/fa';
import { GrHistory } from 'react-icons/gr';
import logo from '../img/logo300x200.svg';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function NavBar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    const { data: session } = useSession();

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
            <div className="absolute top-0 left-0 h-full w-3/4 z-50 bg-white p-4 rounded shadow md:w-1/3">
                <div className='flex flex-row justify-around items-center mb-4 border-b'>
                    <Image src={logo} alt='CuadroPro' width={200} height={100} />
                    <div className='cursor-pointer m-4 rounded-lg hover:bg-blue-500' onClick={toggleMenu}>
                        <AiFillCloseCircle size={30} />
                    </div>
                </div>
                {session?.user ? (
                  <div className='flex flex-col items-center'>
                    <div className='flex gap-x-2'>
                    <img src={session.user.image || undefined} alt={session.user.name || undefined} className='w-10 rounded-lg' /> 
                    <div className='flex flex-col gap-x-2'>
                      <p>Hola</p>
                      <h1 className='font-bold'>{session.user.name}</h1>
                    </div>
                    </div>
                    <div className='bg-blue-500 p-2 my-4 w-fit cursor-pointer rounded-lg text-white font-bold hover:bg-pink-600' 
                        onClick={() => signOut({callbackUrl: '/'})}> 
                        Salir
                      </div>
                  </div>
                  ):(
                  <div className='p-2 border-b' onClick={toggleMenu}>
                    <h1 className='text-sm'>Registrate para dar seguimiento a tus ordenes y mucho más</h1>
                    <button onClick={() => {signIn()}} className='bg-blue-500 p-2 m-2 rounded-lg text-white font-bold hover:bg-pink-600'>
                        Ingresa o Registrate
                    </button>
                  </div>)
                  }
                <ul className='border-b'>
                  <li onClick={toggleMenu}>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500' onClick={() => router.push('/photos')}>
                        <div className='m-2'><BiSolidPhotoAlbum size={20} /></div>
                        <h1>Enmarca tus fotos</h1>
                    </div>
                  </li>
                  <li>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500' onClick={() => router.push('/collection')}>
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
                  <li onClick={toggleMenu}>
                    <div className='flex flex-row items-center cursor-pointer my-2 rounded-md hover:bg-blue-500' onClick={() => router.push('/dashboard')}>
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
                <div onClick={toggleMenu}>
                  <div onClick={() => router.push('/')} className='bg-blue-500 p-2 m-2 rounded-lg text-white font-bold flex justify-center cursor-pointer hover:bg-pink-600'>
                    Inicio
                  </div>
                </div>
            </div>
            )}
        </nav>
    )
}
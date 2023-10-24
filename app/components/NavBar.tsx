import Image from 'next/image';
import { BiMenu } from 'react-icons/bi';
import { BsChatLeftDots } from 'react-icons/bs';
import logo from '../img/logo300x200.svg';
export default function NavBar () {
    return(
        <nav className='flex flex-row justify-between border-b border-blue-500'>
            <div className='flex scale-150 items-center justify-center py-2 m-4 h-full rounded-3xl w-10 cursor-pointer hover:bg-blue-500'>
               <BiMenu />
            </div>
            <div className='mx-2'>
                    <Image src={logo} alt='Cuadros Pro' width={150} height={75} />
            </div>
            <div className='flex scale-150 items-center justify-center py-2 m-4 h-full rounded-3xl w-10 cursor-pointer hover:bg-blue-500'>
                <BsChatLeftDots />
            </div>

        </nav>
    )
}
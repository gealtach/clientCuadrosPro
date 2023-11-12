'use client'
import React, { useRef, useState } from 'react';
import myself from '../img/pictures-photo-svgrepo-com.svg';
import gift from '../img/gift-svgrepo-com.svg';
import Image from 'next/image';
import tiles from '../img/tiles.svg';
import collage from '../img/17.jpg';
import justOne from '../img/justOne.svg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoMdPhotos } from 'react-icons/io';
import { useFileContext } from '../FileContext';
import { useRouter } from 'next/navigation';

function page() {
    const [toMySelfMenu, setToMySelfMenu] = useState(false);
    const [mosaico, setMosaico] = useState(false);
    const { dispatch } = useFileContext();
    const selfMenu = () => setToMySelfMenu(!toMySelfMenu);
    const router = useRouter();
    const mosaicoMenu = () => {
        setMosaico(!mosaico);
        selfMenu();
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleFileInputChange = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
    };
    const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
       //const selectedFiles = e.target.files;
       const files = e.target.files;
       if(files){
           const newFormData = new FormData();
           
           for (let i = 0; i < files.length; i++) {
               const file = files[i];
               newFormData.append('files', file); // 'files' es el nombre que puedes usar en tu servidor para identificar los archivos
            }
            dispatch({ type: 'SET_SELECTED_FILES', payload: files });
            dispatch({ type: 'SET_DATAFORM', payload: newFormData });
        }
       router.push('/selected');
    };

    

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold my-4'>Para quién es?</h1>
        <div className='flex gap-x-4 my-4 bg-slate-100 p-4 rounded-lg cursor-pointer' onClick={selfMenu}>
            <Image src={myself} alt='toMySelf' width={75} height={75} />
            <div>
                <h1 className='text-xl font-bold text-pink-600'>Para mi</h1>
                <h1 className='text-sm text-slate-400'>Estoy decorando mis muros</h1>
            </div>
        </div>
        <div className='flex gap-x-4 my-4 bg-slate-100 p-4 rounded-lg cursor-pointer' onClick={() => router.push('/codemaker')}>
            <Image src={gift} alt='toGift' width={75} height={75} />
            <div>
                <h1 className='text-xl font-bold text-pink-600'>Para regalar</h1>
                <h1 className='text-sm text-slate-400'>Una GiftCard para las buenas ideas</h1>
            </div>
        </div>
        {toMySelfMenu && (
            <div className='absolute bottom-0 h-3/4 z-40 w-full  bg-slate-50 border-2 rounded-lg'>
                <div>
                    <button className='m-3 p-2 rounded-full hover:bg-blue-500' onClick={selfMenu}><AiFillCloseCircle size={30} /></button>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <h1 className='text-xl font-bold'>Qué deseas agregar?</h1>
                    </div>
                    <div className='gap-4'>
                        <div className='flex flex-col gap-2 m-4 py-4 items-center cursor-pointer rounded-lg bg-slate-200' onClick={mosaicoMenu}>
                            <Image className='rounded-xl' src={tiles} alt='Tiles' width={200} height={150} />
                            <h1 className='font-semibold'>Mosaico</h1>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {
            mosaico && (
                <div className='absolute bottom-10 left-10 right-10 z-50 bg-blue-500 rounded-xl p-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-x-3 cursor-pointer md:w-full md:justify-center' onClick={handleFileInputChange}>
                            <IoMdPhotos size={25} />
                            <h1 className='text-sm font-bold'>Importar desde mis archivos</h1>
                            <input
                              type="file"
                              ref={fileInputRef}
                              style={{ display: 'none' }}
                              multiple // Para permitir la selección de múltiples archivos
                              onChange={handleFilesSelected}
                            />
                        </div>
                        <div className='cursor-pointer' onClick={mosaicoMenu}><AiFillCloseCircle size={25} /></div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default page
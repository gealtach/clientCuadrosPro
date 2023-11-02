import React from 'react';
import { FcGoogle } from 'react-icons/fc'; 

export default function page() {
  return (
    <main className='flex justify-center bg-slate-100 p-2'>
        <button className='flex items-center p-2 border-2 border-pink-600 rounded-lg m-4 font-bold hover:bg-blue-500'>
            <div className='mx-2'>
            <FcGoogle size={25} />
            </div>
            Ingresa con Google</button>
    </main>
  )
}

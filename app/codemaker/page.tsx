'use client'
import React, { useState } from 'react'
import { BsCartCheck } from 'react-icons/bs';

function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  }

function Page() {

    const [precio, setPrecio] = useState('');
    const handleChange = (e: any) => {
        setPrecio(e.target.value)
    };
    const handleClick = () => {
        //crear la shit para el codigo
    };
  return (
    <div className='p-4'>
        <h1 className='text-5xl'>Creemos tu GitfCard</h1>
        <div className='flex md:justify-center'>
            <div className='flex flex-col border-2 border-black p-3 rounded-lg m-4 md:w-1/2'>
                <label htmlFor="">Ingresa el monto</label>
                <input type="text" name="precio" value={precio} onChange={handleChange} placeholder='Ingresa el monto' className='border-2 m-2 border-black p-2 rounded-lg' />
                <button 
                    className='flex justify-center gap-x-2 bg-blue-500 rounded-lg p-2 hover:bg-pink-600 font-semibold disabled:opacity-50' 
                    disabled={precio.length <= 0} 
                    onClick={handleClick}
                >
                    <BsCartCheck size={25} />
                    Comprar
                </button>
            </div>
        </div>
    </div>
  )
}

export default Page
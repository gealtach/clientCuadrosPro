'use client'
import React, { useEffect, useState } from 'react';
import { useFileContext } from '../FileContext';
import { AiFillCloseCircle } from 'react-icons/ai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsCartCheck } from 'react-icons/bs';
import { useSession } from 'next-auth/react';

function Selected() {
  const router = useRouter();
  const { dispatch } = useFileContext();
  const { data: session } = useSession();
  const email = session?.user.email;
  const [adress, setAdress] = useState('');

  const handleChange = (e) => {
    setAdress(e.target.value)
  }

  const handleBuy = () => {
    dispatch({ type: 'BUY_CART', payload: {selectedItems, totalPrice, email, adress}});
    router.push('/payment');
  }

  const handleRemoveFile = (position) => {
    dispatch({ type: 'REMOVE_FILE', payload: position });
  };

  const { state } = useFileContext();
  const selectedFiles = state.selectedFiles;
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    if (selectedFiles) {
     }
    else router.push('/');

  }, [selectedFiles]);

  const calculatePrice = (size) => {
    const prices = {
      '10x10': 10,
      '15x15': 15,
      '20x20': 20,
      '20x30': 25,
      '40x40': 30,
    };
    return prices[size];
  };

  const selectedItems = selectedFiles?.map((imageUrl, index) => ({
    url: imageUrl,
    selectedSize: selectedSizes[index] || '10x10',
    price: calculatePrice(selectedSizes[index]) || 10,
  }));
  const totalPrice = selectedItems
    .map((item, index) => (selectedSizes[index] ? selectedSizes[index] : '10x10'))
    .reduce((total, currentSize) => {
      const sizePrice = currentSize === '10x10' ? 10 : currentSize === '15x15' ? 15 : currentSize === '20x20' ? 20 : currentSize === '20x30' ? 25 : currentSize === '40x40' ? 40 : 0;
      return total + sizePrice;
    }, 0);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold my-4'>Archivos seleccionados:</h1>
      <ul className='flex flex-col items-center md:flex-row md:flex-wrap md:gap-x-10 md:mx-4'>
        {selectedItems?.map((item, index) => (
          <li className='bg-pink-600 my-4 p-2 rounded-lg' key={index}>
            <div className='bg-black p-2 m-2 w-fit relative'>
              <button
                className='absolute top-5 right-5 bg-pink-600 rounded-full hover-bg-blue-500'
                onClick={() => handleRemoveFile(index)}
              >
                <AiFillCloseCircle size={30} />
              </button>
              <Image src={item.url} alt='Imagen' width={300} height={200} />
            </div>
            <div>
              <h1 className='text-sm font-semibold'>Escoje tus medidas</h1>
              <div className='flex justify-evenly my-2'>
                <select
                  className='p-2 rounded-lg'
                  name={`medidas-${index}`}
                  id={`size-${index}`}
                  value={selectedSizes[index]}
                  onChange={(e) => {
                    const newSizes = [...selectedSizes];
                    newSizes[index] = e.target.value;
                    setSelectedSizes(newSizes);
                  }}
                >
                  <option className='bg-white p-1 rounded-lg' value='10x10'>
                    10x10
                  </option>
                  <option className='bg-white p-1 rounded-lg' value='15x15'>
                    15x15
                  </option>
                  <option className='bg-white p-1 rounded-lg' value='20x20'>
                    20x20
                  </option>
                  <option className='bg-white p-1 rounded-lg' value='20x30'>
                    20x30
                  </option>
                  <option className='bg-white p-1 rounded-lg' value='40x40'>
                    40x40
                  </option>
                </select>
              </div>
            </div>
            <h1>Precio: {item.price || 10}</h1>
          </li>
        ))}
        {selectedFiles?.length === 0 && (
          <div className='flex flex-col items-center my-10'>
            <h1 className='text-xl'>Has eliminado todos los archivos.</h1>
            <button
              className='text-white font-bold p-2 m-2 bg-pink-600 rounded-lg'
              onClick={() => router.push('/photos')}
            >
              Volver
            </button>
          </div>
        )}
      </ul>
      <div className='flex gap-x-3'>
            <h1 className='text-lg'>Total:</h1>
            <h1 className='text-lg font-bold'>{totalPrice} CLP</h1>
      </div>
      <label htmlFor="direccion" className='m-2'>Agrega tu dirección para el envío</label>
      <input className='border rounded-lg h-10' type="text" name="direccion" value={adress} onChange={handleChange} placeholder='Calle Numero, Comuna' />
      <button onClick={handleBuy} disabled={adress.length < 5 ? true : false} className='flex disabled:opacity-70 bg-blue-500 p-2 gap-x-2 rounded-lg m-2 hover:bg-pink-600 hover:text-white'>
        <BsCartCheck size={20} />
        Comprar
      </button>
    </div>
  );
}

export default Selected;
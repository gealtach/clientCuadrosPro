'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Purchase {
  id: number;
  createdAt: string; // Asumiendo que createdAt es una cadena (ajusta según corresponda)
  buyer: string;
  totalPrice: number;
  done: boolean;
  boxes: Box[];
  adress: string;
}

interface Box {
  id: number;
  createdAt: string;
  url: string;
  selectedSize: string;
  price: number;
}

function Page() {
  const [info, setInfo] = useState<Purchase[]>([]);
  const sortedInfo =  [...info].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const router = useRouter();

  const handleDone = async (id: string) => {
    try {
      await fetch(`/api/done/${id}`, {
        method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      });
    } catch (error) {
      console.error('Error:', error);
    }
    router.refresh();
  };

  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('/api/allpurchases');
      const data = await response.json();
      setInfo(data);
    }
    fetchData();
  },[info]);

  return (
    <div>
        <h1>Admin!!</h1>
        <div>
          <ul>
            {sortedInfo && sortedInfo.map((purchase: any, index: number) => (
              <li className='bg-blue-500 m-4 p-2 rounded-lg border-2 border-black' key={index}>
                <div className='flex justify-between items-center'>
                  <div>
                    <p>Id Compra: {purchase.id}</p>
                    <p>Fecha de compra: {purchase.createdAt}</p>
                    <p>Comprador: {purchase.buyer}</p>
                    <p>Total: {purchase.totalPrice}</p>
                  </div>
                  <div className={`${purchase.done ? 'bg-green-400' : 'bg-red-600'} p-2 rounded-lg font-bold text-center cursor-pointer`} onClick={() => handleDone(purchase.id)}>
                    {purchase.done ? 'Realizado' : 'No Realizado!!!'}
                  </div>
                </div>
                
                <ul>
                  {purchase.boxes && purchase.boxes.map((box:any, index:number) =>(
                    <li className='bg-pink-600 m-2 p-2 rounded-md border border-black' key={index}>
                      <p>Id: {box.id}</p>
                      <a href={box.url} target='_blank'>Imagen:{box.url}</a>
                      <p>Dimensiones: {box.selectedSize}</p>
                      <p>Precio: {box.price}</p>
                    </li>
                  ))}
                </ul>                
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Page
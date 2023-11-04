'use client'
import React, { useEffect } from 'react'
import { useFileContext } from '../FileContext';
import { useRouter } from 'next/navigation';
import webpayLogo from '../img/1348844731.svg';
import mercadoPagoLogo from '../img/Mercado_Pago-OGfnlreJZ_brandlogos.net.svg';
import Image from 'next/image';
function payment() {
  const { state } = useFileContext();
  const cart = state.buyCart;
  const router = useRouter();
  useEffect(()=>{
    //if(!cart) router.push('/') 
  },[])
  console.log(cart)
  return (
    <div>
      <div className='m-4 p-4 flex gap-x-10'>
        <h1 className='text-xl'>Tu total es de:</h1>
        <h1 className='text-3xl font-bold'>{cart?.totalPrice || 0}CLP</h1>
      </div>
      <div className='flex flex-col items-center gap-y-6'>
        <h1>Métodos de pago</h1>
        <div className='border p-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-blue-500'><Image src={webpayLogo} alt='webpay' width={250} height={200} /></div>
        <div className='border p-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-blue-500'><Image src={mercadoPagoLogo} alt='mercadoPago' width={250} height={200} /></div>
      </div>
    </div>
  )
}

export default payment
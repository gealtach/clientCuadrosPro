import React from 'react'

export default function Footer() {
  return (
    <main className='pb-20 md:pb-32 mx-4 bg-slate-100 p-2 rounded-lg'>
        <div>
            <ul>
                <li className='cursor-pointer text-sm my-2 w-fit p-1 rounded-md hover:bg-blue-500'><a href="mailto:cuadrospro.ventas@gmail.com" target='_blank'>Contáctanos</a></li>
                <li className='cursor-pointer text-sm my-2 w-fit p-1 rounded-md hover:bg-blue-500'>FAQs</li>
                <li className='cursor-pointer text-sm my-2 w-fit p-1 rounded-md hover:bg-blue-500'>Gift Card</li>
            </ul>
        </div>
        <div>
            <h1 className='text-slate-500 text-xs'>© Copyright 2015-2023 Cuadros Pro</h1>
            <h1 className='text-sm'>Desarrollado por <a className='text-blue-500 text-base font-bold' href="https://cesar-dev.vercel.app/" target='_blank'>Cesar-Dev</a></h1>
        </div>
    </main>
  )
}

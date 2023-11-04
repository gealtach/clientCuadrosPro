import { useRouter } from 'next/navigation'
import React from 'react'

export default function BtnFooter() {
  const router = useRouter();
  return (
    <main className='flex justify-center'>
        <button onClick={() => router.push('/photos')} className='bg-pink-600 brightness-110 hover:bg-blue-500 w-11/12 p-4 rounded-lg font-bold text-white'>Comenzar</button>
    </main>
  )
}

'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Page() {
  const { data: session } = useSession();
  const [purchases, setPurchases] = useState<any>([]);
  const router = useRouter();

  const handleClick = (id : string) => {
    router.push(`/dashboard/${id}`)    
  }

  useEffect(() => {
    async function fetchData() {
      if (session && session.user) { // Verificar si session y session.user están definidos
        const email = session.user.email;
        const response = await fetch(`/api/purchases?email=${email}`);
        const data = await response.json();
        setPurchases(data);
      }
    }
    fetchData();
  }, [session]);

  return (
    <div className='md:flex md:flex-wrap'>
      {purchases &&  purchases.map((purchase: any, index:number) => (
        <div className='bg-slate-100 rounded-lg border m-2 p-2 text-sm cursor-pointer' key={index} onClick={() =>handleClick(purchase.id)}>
          <p>Id Compra: {purchase.id}</p>
          <p>Fecha de compra: {purchase.createdAt}</p>
          <p>Comprador: {purchase.buyer}</p>
          <p>Total: {purchase.totalPrice}</p>
        </div>
      ))}
    </div>
  )
}

export default Page;

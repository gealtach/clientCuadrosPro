'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

function Page() {
  const { data: session } = useSession();
  const [purchases, setPurchases] = useState<any>([]);

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
    <div>
      {purchases &&  purchases.map((purchase: any, index:number) => (
        <div className='bg-slate-100 my-2 p-2' key={index}>
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

'use client'
import React, { useEffect, useState } from 'react'

function page() {
  const [info, setInfo] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('/api/allpurchases');
      const data = await response.json();
      setInfo(data)
      console.log(data)
    }
    fetchData();
  },[])
  return (
    <div>
        <h1>Admin!!</h1>
        <div>
          <ul>
            {info && info.map((purchase: any, index: number) => (
              <li className='bg-blue-500' key={index}>
                <p>Id Compra: {purchase.id}</p>
                <p>Fecha de compra: {purchase.createdAt}</p>
                <p>Comprador: {purchase.buyer}</p>
                <p>Total: {purchase.totalPrice}</p>
                <ul>
                  {purchase.boxes && purchase.boxes.map((box:any, index:number) =>(
                    <li className='bg-pink-600'>
                      <p>{box.id}</p>
                      <p>{box.createdAt}</p>
                      <p>{box.url}</p>
                      <p>{box.selectedSize}</p>
                      <p>{box.price}</p>
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

export default page
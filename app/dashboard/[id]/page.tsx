'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Page({ params }: any) {
  const [info, setInfo] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/${params.id}`);
      const data = await response.json();
      setInfo(data);
    }
    fetchData();
  }, [params.id]);

  return (
    <div>
      {info.map((item: any) => (
        <div className='bg-slate-100 m-2 p-2' key={item.id}>
          <p>Created At: {item.createdAt}</p>
          <Image src={URL.createObjectURL(new Blob([item.url]))} alt='img' width={200} height={200} />
          <p>Selected Size: {item.selectedSize}</p>
          <p>Price: {item.price}</p>
          <p>Purchase ID: {item.purchaseId}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;


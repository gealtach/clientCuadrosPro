import photo1 from '../img/3.jpg';
import photo2 from '../img/7.jpg';
import photo3 from '../img/10.jpg';
import photo4 from '../img/11.jpg';
import photo5 from '../img/12.jpg';
import photo6 from '../img/13.jpg';
import photo7 from '../img/17.jpg';
import photo8 from '../img/18.jpg';
import photo9 from '../img/19.jpg';
import photo10 from '../img/20.jpg';
import photo11 from '../img/21.jpg';
import photo12 from '../img/22.jpg';
import photo13 from '../img/23.jpg';
import photo14 from '../img/25.jpg';
import photo15 from '../img/26.jpg';

import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div>
        <h1 className="text-2xl font-bold m-4">Galeria</h1>
        <div className='flex flex-col gap-y-4 bg-slate-100 items-center py-4 md:flex-row md:flex-wrap md:gap-x-4 md:justify-center'>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo1} alt='photo1' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo2} alt='photo2' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo3} alt='photo3' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo4} alt='photo4' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo5} alt='photo5' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo6} alt='photo6' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo7} alt='photo7' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo8} alt='photo8' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo9} alt='photo9' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo10} alt='photo10' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo11} alt='photo11' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo12} alt='photo12' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo13} alt='photo13' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo14} alt='photo14' width={250} height={250} />
            </div>
            <div>
                <Image className='border-2 border-pink-600 rounded-lg' src={photo15} alt='photo15' width={250} height={250} />
            </div>
        </div>
    </div>
  )
}

export default Page
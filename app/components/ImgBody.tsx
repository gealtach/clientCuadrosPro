import Image from "next/image";
import  img1 from '../img/22.jpg';
import  img2 from '../img/17.jpg';
import  img3 from '../img/12.jpg';

export default function ImgBody () {
    return(
        <main className="flex flex-col">
            <div>
                <h1 className='text-5xl font-medium m-4'>Transforma tus fotografias en decoración</h1>
            </div>
            <div className="flex flex-row p-4 justify-center items-center">
                <div className="m-2">
                    <Image src={img1} alt="img1" width={200} className="rounded-lg md:w-full" />
                </div>
                <div className="flex flex-col">
                    <div className="m-2">
                        <Image src={img2} alt="img2" width={100} className="rounded-lg md:w-full" />
                    </div>
                    <div className="m-2">
                        <Image src={img3} alt="img3" width={100} className="rounded-lg md:w-full" />
                    </div>
                </div>
            </div>
        </main>
    )
}
import Image from "next/image";
import Img1 from '../img/nonails.png';
import Img2 from '../img/face_girl_01.webp';

export default function ImgBar () {
    return(
        <main className="flex flex-col items-center md:mt-4">
            <div className="flex flex-col items-center my-5">
                <Image src={Img1} alt="img1" width={100}/>
                <h1 className="text-xl">No requiere clavos</h1>
                <h2>Nuestras cintas se adhiere a cualquier superficie</h2>
            </div>
            <div className="flex flex-col items-center my-5">
                <Image src={Img2} alt="img2" width={100} />
                <h1 className="text-xl">Satisfación garantizada</h1>
                <h2>Conoce nuestras políticas de devolución</h2>
            </div>
        </main>
    )
}
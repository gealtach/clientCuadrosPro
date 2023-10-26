import Image from "next/image";
import gif from '../img/reel.gif';


export default function BodyVideo () {
    return(
        <main className="flex flex-col m-4 p-2 pb-8 items-center bg-blue-500 rounded-lg">
            <div>
                <Image src={gif} alt="gif" width={300} height={200} className="rounded-lg" />
            </div>
            <h1 className="text-2xl text-center mt-2 w-3/4">La magia de hacer arte con tus recuerdos</h1>
            <h1 className="text-center w-3/4">Transforma tus momentos especiales en tu decoración para poder revivir los siempre</h1>
        </main>
    )
}
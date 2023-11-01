import React, { useState } from 'react'
import r1 from '../img/3.jpg';
import r2 from '../img/17.jpg';
import r3 from '../img/19.jpg';
import r4 from '../img/7.jpg';
import r5 from '../img/Cuadros PRO.jpg';
import r6 from '../img/11.jpg';
import r7 from '../img/20.jpg';
import r8 from '../img/18.jpg';
import Image from 'next/image';

const reviews = [
    {img: r1, review: 'Increíble Arte Personalizado: ¡No puedo creer lo asombroso que resultó mi cuadro! La empresa transformó una simple fotografía en una obra de arte increíble. ¡Estoy completamente enamorado de mi nuevo cuadro!'},
    {img: r2, review: 'Profesionalismo y Calidad Insuperables: Esta empresa realmente sabe lo que hace. La atención al detalle y la calidad de su trabajo son excepcionales. Mi cuadro se ve perfecto en mi sala de estar.'},
    {img: r3, review: 'Atención al Cliente Excepcional: El equipo de esta empresa es extremadamente amable y servicial. Respondieron a todas mis preguntas y se aseguraron de que estuviera 100% satisfecho con mi pedido.'},
    {img: r4, review: 'Entrega Rápida y Segura: Mi cuadro llegó antes de lo esperado y en perfectas condiciones. Estaban muy bien empaquetados para garantizar que no sufrieran daños durante el envío.'},
    {img: r5, review: 'Amplia Variedad de Opciones: Me encanta la variedad de estilos y tamaños de cuadros que ofrecen. Puedes personalizar tu pedido para que se adapte perfectamente a tu espacio y estilo.'},
    {img: r6, review: 'Obra Maestra Personalizada: La empresa no solo convirtió mi foto en un cuadro hermoso, sino que también permitieron que personalizara los detalles para que fuera exactamente como lo imaginaba. El resultado final es una verdadera obra maestra que refleja mi estilo y personalidad.'},
    {img: r7, review: 'Precio Justo por Calidad Inigualable: La calidad de los cuadros que esta empresa produce es incomparable, y el precio es más que justo. Obtienes una obra de arte personalizada de alta calidad que vale cada peso.'},
    {img: r8, review: 'Muestra de Profesionalismo: Desde el primer contacto hasta la entrega, esta empresa demostró un alto nivel de profesionalismo. Cumplieron con los plazos y mantuvieron una comunicación constante para asegurarse de que mi cuadro fuera exactamente lo que esperaba.'}
]

export default function Reviews() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
    };
  return (
    <main className='flex flex-col items-center my-5'>
        <h1 className='text-2xl'>Reseñas que nos hacen el día</h1>
        <h1>Amamos que ames nustro trabajo</h1>

        <div className='flex flex-col items-center bg-slate-100 p-2 rounded-lg m-4'>
            <div>
                <Image src={reviews[currentIndex].img} alt="Review" className="mx-auto rounded-lg" width={300} height={300} />
            </div>
            <div className='w-3/4 my-2'>
                <p className="text-sm text-center">{reviews[currentIndex].review}</p>
            </div>
            <div className='flex w-full justify-evenly'>
                <button
                onClick={handlePrev}
                className="p-2 my-2 bg-blue-500 text-white rounded-full hover:bg-pink-600 focus:outline-none"
                >
                &#8249;
                </button>
                <button
                onClick={handleNext}
                className="p-2 my-2 bg-blue-500 text-white rounded-full hover:bg-pink-600 focus:outline-none"
                >
                &#8250;
                </button>
            </div>
        </div>
    </main>
  )
}

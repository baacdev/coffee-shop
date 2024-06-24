import React from 'react'
import { Link } from 'react-router-dom';

const promociones = [
  {
    id: 1,
    name: 'Vuélvete experto en el café desde casa',
    description: 'Conoce los métodos de café y lleva a casa tu favorito.',
    promotionStartDate: '',
    promotionEndDate: '',
    href:'/ecommerce/section/menu/merch-y-cafe-en-grano/merch',
    buttonName: 'Comprar ahora',
    imageSrc: 'https://prodappconfiguration.blob.core.windows.net/bannersimages/PRE3.png'
  },
  {
    id: 2,
    name: '¿Aún no eres miembro Rewards y deseas el nuevo Stanley?',
    description: 'Regístrate y disfruta de nuestra preventa exclusiva solo hoy y mañana.',
    promotionStartDate: '',
    promotionEndDate: '',
    href:'/account/register',
    buttonName: 'Regístrarme',
    imageSrc: 'https://prodappconfiguration.blob.core.windows.net/bannersimages/ROSA3.png'
  },
  {
    id: 3,
    name: 'Despierta el día con energía y sabor',
    description: 'Pide en tienda tu combinación perfecta para iniciar el día con alegría y buen gusto.',
    promotionStartDate: '01-04-2024',
    promotionEndDate: '16-09-2024',
    href:'/ecommerce/section/menu',
    buttonName: 'Conoce más aquí',
    imageSrc: 'https://prodappconfiguration.blob.core.windows.net/bannersimages/BA1.png'
  },
  {
    id: 4,
    name: 'Llegó la temporada Retro',
    description: 'Disfruta nuestro delicioso Frappuccino sin café de vainilla con mango dragon fruit.',
    promotionStartDate: '09-02-2024',
    promotionEndDate: '21-07-2024',
    href:'/ecommerce/section/menu/bebidas/frappuccinos',
    buttonName: 'Conoce más aquí',
    imageSrc: 'https://prodappconfiguration.blob.core.windows.net/bannersimages/RETRO1.png'
  },
]

function HomePage() {
  return (
    <>
      <div className='bg-white flex min-h-[100vh]'>
        <div className='bg-white mt-10 mb-10 mx-auto max-w-2xl flex flex-col items-center gap-y-16 lg:max-w-7xl'>
          {promociones.map((promocion) => (
            <div key={promocion.id} className='bg-stone-100 flex flex-col lg:flex-row items-center lg:pb-0'>
              <div className='text-center m-1 lg:m-0 lg:pl-10 lg:text-left lg:w-1/2'>
                <h2 className='mt-3 text-2xl font-bold font-opensans tracking-tight text-orange-900 sm:text-5xl sm:mt-0'>
                  {promocion.name}
                </h2>
                <p className='mt-5 text-orange-900 text-base lg:text-lg font-bold font-opensans'>
                  {promocion.description}
                </p>
                <p className='mt-1 text-orange-900 text-sm lg:text-base font-semibold font-opensans'>
                  {promocion.promotionStartDate} {promocion.promotionEndDate}
                </p>
                <Link
                  to={promocion.href}
                  className='mt-5 w-fit mx-auto lg:mx-0 flex items-center justify-center rounded-full border border-orange-900 bg-orange-50 px-4 py-2 text-sm lg:text-base font-bold font-opensans text-orange-800 hover:bg-orange-100'
                >
                  {promocion.buttonName}
                </Link>
              </div>
              <div className='w-full h-full mt-5 lg:mt-0 lg:ml-10 lg:w-1/2 flex justify-center'>
                <img
                  src={promocion.imageSrc}
                  alt='Imagen de promoción'
                  className='rounded-none bg-gray-100 w-full h-full'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
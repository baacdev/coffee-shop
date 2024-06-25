import React from 'react'
import { Link } from 'react-router-dom';

const promotions = [
  {
    id: 1,
    name: 'Become a coffee expert from home',
    description: 'Get to know the coffee methods and take home your favorite.',
    promotionStartDate: '',
    promotionEndDate: '',
    href:'/ecommerce/section/menu/merch-y-cafe-en-grano/merch',
    buttonName: 'Buy now',
    imageAlt: 'A coffee maker, tea maker, and glass pitcher arranged on a countertop.',
    imageSrc: '/assets/img/electrodomesticos.jpeg'
  },
  {
    id: 2,
    name: 'Not yet a Rewards member and want the new tanley stainless steel water bottle?',
    description: 'Register and enjoy our exclusive pre-sale.',
    promotionStartDate: '',
    promotionEndDate: '',
    href:'/account/register',
    buttonName: 'Sign up',
    imageAlt: 'Stanley stainless steel water bottle: a durable and sleek hydration solution for on-the-go adventures.',
    imageSrc: '/assets/img/stanley-termo.png'
  },
  {
    id: 3,
    name: 'Wake up the day with energy and flavor',
    description: 'Order in store your perfect combination to start the day with joy and good taste.',
    promotionStartDate: '01-04-2024',
    promotionEndDate: '16-09-2024',
    href:'/ecommerce/section/menu',
    buttonName: 'Learn more',
    imageAlt: 'Caramel apple latte in a Starbucks cup, topped with whipped cream and caramel drizzle.',
    imageSrc: '/assets/img/caremel_macchiato_bananaa_bread.jpg'
  },
  {
    id: 4,
    name: 'Retro season is here',
    description: 'Enjoy our delicious coffee-free vanilla Frappuccino with mango dragon fruit.',
    promotionStartDate: '09-02-2024',
    promotionEndDate: '21-07-2024',
    href:'/ecommerce/section/menu/bebidas/frappuccinos',
    buttonName: 'Learn more',
    imageAlt: 'Two glasses of pink milkshake topped with whipped cream, served in clear glassware.',
    imageSrc: '/assets/img/frappuccino-rosa.jpg'
  },
]

function HomePage() {
  return (
    <>
      <div className='bg-white flex min-h-[100vh]'>
        <div className='bg-white mt-10 mb-10 mx-auto max-w-2xl flex flex-col items-center gap-y-16 lg:max-w-7xl'>
          {promotions.map((promocion) => (
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
                  alt={promocion.imageAlt}
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
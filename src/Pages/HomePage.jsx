import React from 'react'
import { Link } from 'react-router-dom';

const promotions = [
  {
    id: 1,
    name: 'Become a coffee expert from home',
    description: 'Get to know the coffee methods and take home your favorite.',
    promotionStartDate: '',
    promotionEndDate: '',
    href: '/menu/merchandise',
    buttonName: 'Buy now',
    imageAlt: 'A coffee maker, tea maker, and glass pitcher arranged on a countertop.',
    imageSrc: '/assets/img/home/home-appliances.avif'
  },
  {
    id: 2,
    name: 'Not yet a Rewards member and want the new tanley stainless steel water bottle?',
    description: 'Register and enjoy our exclusive pre-sale.',
    promotionStartDate: '',
    promotionEndDate: '',
    href: '/account/register',
    buttonName: 'Sign up',
    imageAlt: 'Stanley stainless steel water bottle: a durable and sleek hydration solution for on-the-go adventures.',
    imageSrc: '/assets/img/home/stanley-thermos.avif'
  },
  {
    id: 3,
    name: 'Wake up the day with energy and flavor',
    description: 'Order in store your perfect combination to start the day with joy and good taste.',
    promotionStartDate: '01-04-2024',
    promotionEndDate: '16-09-2024',
    href: '/menu/drinks/cold-coffees',
    buttonName: 'Learn more',
    imageAlt: 'Caramel apple latte in a Starbucks cup, topped with whipped cream and caramel drizzle.',
    imageSrc: '/assets/img/home/caremel-macchiat-banana-bread.avif'
  },
]

function HomePage() {
  return (
    <>
      <div className='bg-white flex min-h-[100vh]'>
        <div className='bg-white mt-10 mb-10 mx-auto max-w-2xl flex flex-col items-center gap-y-16 lg:max-w-7xl'>
          {promotions.map((promotion) => (
            <div key={promotion.id} className='bg-stone-100 flex flex-col lg:flex-row items-center lg:pb-0'>
              <div className='text-center m-1 lg:m-0 lg:pl-10 lg:text-left lg:w-1/2'>
                <h2 className='mt-3 text-2xl font-bold font-opensans tracking-tight text-orange-900 sm:text-5xl sm:mt-0'>
                  {promotion.name}
                </h2>
                <p className='mt-5 text-orange-900 text-base lg:text-lg font-bold font-opensans'>
                  {promotion.description}
                </p>
                <p className='mt-1 text-orange-900 text-sm lg:text-base font-semibold font-opensans'>
                  {promotion.promotionStartDate} {promotion.promotionEndDate}
                </p>
                <Link
                  to={promotion.href}
                  className='mt-5 w-fit mx-auto lg:mx-0 flex items-center justify-center rounded-full border border-orange-900 bg-orange-50 px-4 py-2 text-sm lg:text-base font-bold font-opensans text-orange-800 hover:bg-orange-100'
                >
                  {promotion.buttonName}
                </Link>
              </div>
              <div className='w-full h-full mt-5 lg:mt-0 lg:ml-10 lg:w-1/2 flex justify-center'>
                <img
                  src={promotion.imageSrc}
                  alt={promotion.imageAlt}
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